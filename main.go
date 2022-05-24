package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/bitcoinsv/bsvd/chaincfg"
	"github.com/bitcoinsv/bsvutil"
	"github.com/jmoiron/sqlx"
	"github.com/pkg/errors"

	"taal-client/client"
	"taal-client/database"
	"taal-client/repository"
	"taal-client/server"
	"taal-client/settings"
)

const (
	dbFolder         = "localdata"
	sqLiteDBFilename = "db"
)

func usage() {
	fmt.Println(`
Usage
-----

taal-client
  Starts listening for requests on :9500.  This value can be changed with the LISTEN environment variable.

  All requests will be sent to https://tapi.taal.com by default unless overridden with the TAAL_URL environment variable.

  DEBUG = 1 will log all transactions to console
  
  By default taal-client uses a local data storage

  CONNECT_TO_DB = 1 means that the client will connect to an external database. Currently only PostgreSQL databases are supported.
  In that case the connection is configured with HOST, DBNAME, USERNAME, PASSWORD, PORT.

  "taal-client help" shows this description

Environment variables
---------------------
  LISTEN
  TAAL_URL
  TAAL_TIMEOUT
  DEBUG
  CONNECT_TO_DB
  HOST
  DBNAME
  USERNAME
  PASSWORD
  PORT

Example
-------
  DEBUG=1 LISTEN=localhost:8080 TAAL_URL=http://localhost:4000 TAAL_TIMEOUT=1m ./taal_client
  
	`)
}

func main() {
	if len(os.Args) == 2 && os.Args[1] == "help" {
		usage()
		os.Exit(1)
	}

	conf := settings.Get()

	var db *sqlx.DB
	var err error

	if conf.DBType == "postgres" {

		db, err = database.GetPostgreSqlDB(conf.DBHost, conf.DBPort, conf.DBUsername, conf.DBPassword, conf.DBName)
		if err != nil {
			log.Fatalf("could not open postgres database: %v", err)
			return
		}

		err = database.RunMigrationsPostgreSQL(db)
		if err != nil {
			log.Fatalf("postgres database migration failed: %v", err)
			return
		}
	} else {
		db, err = database.GetSQLiteDB(dbFolder, sqLiteDBFilename)
		if err != nil {
			log.Fatalf("could not open sqlite database: %v", err)
			return
		}

		err = database.RunMigrationsSQLite(db)
		if err != nil {
			log.Fatalf("sqlite database migration failed: %v", err)
			return
		}
	}

	defer db.Close()

	err = startServer(conf, db)
	if err != nil {
		log.Fatalf("app terminated with error: %v", err)
	}
}

func startServer(conf *settings.Settings, db *sqlx.DB) error {
	timeout, err := time.ParseDuration(conf.TaalTimeOut)
	if err != nil {
		log.Fatalf("taal_timeout of %q is invalid: %v", timeout, err)
	}

	client := client.New(conf.TaalUrl, timeout)
	repo := repository.NewRepository(db, time.Now)

	// move keys from the key json files to the database. Once all active customers ran this code it can be removed
	ctx := context.Background()
	moveKeysToDB(ctx, repo)

	server := server.New(conf.ListenAddress, client, repo)

	stopServer := make(chan bool, 1)
	stop := make(chan os.Signal, 1)
	signal.Notify(stop, syscall.SIGINT, syscall.SIGTERM)

	go func() {
		<-stop
		stopServer <- true
	}()

	if err := server.Start(stopServer); err != nil {
		return errors.Wrap(err, "failed to start server")
	}

	return nil
}

func moveKeysToDB(ctx context.Context, repo repository.Repository) error {
	// Check if there are configKeys in the configKeys folder. If yes, then store them in the DB
	// Move existing keys to an archive
	configKeys, err := settings.GetKeysFromJson()
	if err != nil {
		return errors.Wrap(err, "failed to get keys from json files")
	}
	if len(configKeys) > 0 {
		for _, configKey := range configKeys {

			key, err := getKeyFromConfigKey(configKey)
			if err != nil {
				return errors.Wrap(err, "failed to get key from config key")
			}

			err = repo.InsertKey(ctx, key)
			if err != nil {
				return errors.Wrap(err, "failed to insert keys from json files into DB")
			}
		}
	}

	err = os.Rename("keys", "keys_archive")
	if err != nil {
		return errors.Wrap(err, "failed to move config keys to archive folder")
	}

	return nil
}

func getKeyFromConfigKey(configKey settings.JsonStruct) (server.Key, error) {
	privateKey, err := server.GetPrivateKey(configKey.PrivateKey)
	if err != nil {
		return server.Key{}, nil
	}

	pubKeyAddress, err := bsvutil.NewAddressPubKey(privateKey.PubKey().SerializeCompressed(), &chaincfg.MainNetParams)
	if err != nil {
		return server.Key{}, errors.Wrap(err, "unable to create address")
	}

	key := server.Key{
		ApiKey:     configKey.ApiKey,
		PublicKey:  configKey.PublicKey,
		PrivateKey: configKey.PrivateKey,
		Address:    pubKeyAddress.EncodeAddress(),
	}
	return key, nil
}
