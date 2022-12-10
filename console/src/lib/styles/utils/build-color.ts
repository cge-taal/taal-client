import { mix, lighten, darken, setSaturation } from 'polished'

type Keys =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'A100'
  | 'A200'
  | 'A400'
  | 'A700'

export const buildColor = (c: Partial<Record<Keys, string>>): Record<Keys, string> => {
  const A400 = c.A400 || setSaturation(0.5, c[400] as string)
  return {
    50: c[50] as string,
    100: c[100] || mix(0.8, c[50] as string, c[400] as string),
    200: c[200] || mix(0.4, c[50] as string, c[400] as string),
    300: c[300] || mix(0.2, c[50] as string, c[400] as string),
    400: c[400] as string,
    500: c[500] || mix(0.2, c[900] as string, c[400] as string),
    600: c[600] || mix(0.4, c[900] as string, c[400] as string),
    700: c[700] || mix(0.6, c[900] as string, c[400] as string),
    800: c[800] || mix(0.8, c[900] as string, c[400] as string),
    900: c[900] as string,
    A100: c.A100 || lighten(0.3, A400),
    A200: c.A200 || lighten(0.2, A400),
    A400: A400,
    A700: c.A700 || darken(0.25, A400),
  }
}