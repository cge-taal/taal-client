package server

import (
	"bufio"
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"
	"regexp"
	"strings"
	"taal-client/settings"

	"github.com/labstack/echo/v4"
)

var (
	lineRegex = regexp.MustCompile(`^(\s*)(\S+)(\s*=\s*)(\S+){0,1}(\s*)(#.*)*$`)
)

const (
	settingsFile     = "settings.conf"
	settingsTempFile = "settings.conf.tmp"
	settingsOldFile  = "settings.conf.old"
)

func (s Server) getSettings(c echo.Context) error {
	b, err := settings.GetJSON()
	if err != nil {
		return s.sendError(c, http.StatusInternalServerError, 22, err)
	}

	return c.Blob(http.StatusOK, echo.MIMEApplicationJSON, b)
}

type setting struct {
	Key   string `json:"key"`
	Value string `json:"value"`
}

func (s Server) putSetting(c echo.Context) error {
	set := new(setting)
	if err := c.Bind(set); err != nil {
		return s.sendError(c, http.StatusInternalServerError, 21, err)
	}

	if err := updateSettings(set.Key, set.Value, settingsFile, settingsTempFile, settingsOldFile); err != nil {
		return s.sendError(c, http.StatusInternalServerError, 22, err)
	}

	settings.Set(set.Key, set.Value)

	switch set.Key {
	case "taalTimeout":
		timeout, err := settings.GetDuration("taalTimeout")
		if err != nil {
			log.Fatalf("taal_timeout of %q is invalid: %v", timeout, err)
		}

		s.taal.SetTimeout(timeout)
	case "taalUrl":
		taalURL := settings.Get("taalUrl")
		s.taal.SetUrl(taalURL)
	}

	return c.String(http.StatusOK, "OK")
}

func updateSettings(key, value string, settingsFile string, settingsTempFile string, settingsOldFile string) error {
	w, err := os.Create(settingsTempFile)
	if err != nil {
		return fmt.Errorf("Could not create settings.conf.tmp: %v", err)
	}

	r, err := os.Open(settingsFile)
	if err != nil {
		if !errors.Is(err, os.ErrNotExist) {
			return fmt.Errorf("Could not open settings.conf: %v", err)
		}

		if _, err := w.WriteString(fmt.Sprintf("%s=%s\n", key, value)); err != nil {
			return fmt.Errorf("Could not write setting: %v", err)
		}

		if err := w.Close(); err != nil {
			return fmt.Errorf("Could not close temp file: %v", err)
		}

		if err := os.Rename(settingsTempFile, settingsFile); err != nil {
			return fmt.Errorf("Could not rename temp file: %v", err)
		}

		return nil
	}

	written := false
	_ = written

	value = strings.TrimSpace(value)

	scanner := bufio.NewScanner(r)

	for scanner.Scan() {
		line := scanner.Text()

		if written {
			if _, err := w.WriteString(fmt.Sprintf("%s\n", line)); err != nil {
				return fmt.Errorf("Could not write to temp file: %v", err)
			}

			continue
		}

		parts := lineRegex.FindAllStringSubmatch(line, -1)

		if len(parts) != 1 {
			if _, err := w.WriteString(fmt.Sprintf("%s\n", line)); err != nil {
				return fmt.Errorf("Could not write to temp file: %v", err)
			}

			continue
		}

		k := parts[0][2]

		if k == key {
			var sb strings.Builder

			sb.WriteString(parts[0][1]) // Leading space
			sb.WriteString(k)
			sb.WriteString(parts[0][3]) // Equals
			sb.WriteString(value)
			sb.WriteString(parts[0][5]) // Spaces to comment
			sb.WriteString(parts[0][6]) // Comment
			sb.WriteByte('\n')

			if _, err := w.WriteString(sb.String()); err != nil {
				return fmt.Errorf("Could not write to temp file: %v", err)
			}

			written = true
		} else {
			if _, err := w.WriteString(fmt.Sprintf("%s\n", line)); err != nil {
				return fmt.Errorf("Could not write to temp file: %v", err)
			}
		}
	}

	if !written {
		if _, err := w.WriteString(fmt.Sprintf("%s=%s\n", key, value)); err != nil {
			return fmt.Errorf("Could not write to temp file: %v", err)
		}
	}

	if err := w.Close(); err != nil {
		return fmt.Errorf("Could not close temp file: %v", err)
	}

	if err := os.Rename(settingsFile, settingsOldFile); err != nil {
		return fmt.Errorf("Could not rename original file: %v", err)
	}

	if err := os.Rename(settingsTempFile, settingsFile); err != nil {
		return fmt.Errorf("Could not rename temp file: %v", err)
	}

	return nil
}
