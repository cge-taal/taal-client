export const setCSSVariablesFromObj = (paths: string[] = [], obj, themeNs) => {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      document.documentElement.style.setProperty(
        `--${themeNs ? `${themeNs}-` : ''}${paths.length ? `${paths.join('-')}-${key}` : key}`,
        obj[key]
      )
    } else {
      setCSSVariablesFromObj([...paths, key], obj[key], themeNs)
    }
  }
}

export const setCSSVariables = (theme, themeNs) => {
  setCSSVariablesFromObj([], theme, themeNs)
}
