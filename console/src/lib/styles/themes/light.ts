import { buildColor } from '../utils/build-color'
import { lighten, darken, setSaturation } from 'polished'

const primary = '#232d7c'
const primaryA = '#48c1ff'
const accent = '#f2b33b'
const accentA = '#ff8800'
const neutral = '#dee4eb'
const neutralA = '#97b6dd'
const grey = '#76747c'
const success = '#68c17c'
const successA = '#2aff58'
const danger = '#ff344c'
const dangerA = '#ff05b4'

const palette = {
  primary: buildColor({
    50: lighten(0.6, primary),
    400: primary,
    900: darken(0.1, primary),
    A400: primaryA,
  }),
  // secondary: buildColor({
  //   50: lighten(0.6, secondary),
  //   400: secondary,
  //   900: darken(0.1, secondary),
  //   A400: secondaryA,
  // }),
  accent: buildColor({
    50: lighten(0.4, accent),
    400: accent,
    900: darken(0.3, setSaturation(1, accent)),
    A400: accentA,
  }),
  neutral: buildColor({
    50: lighten(0.08, neutral),
    400: neutral,
    900: darken(0.25, setSaturation(0.2, neutral)),
    A400: neutralA,
  }),
  grey: buildColor({
    50: '#f5f5f5',
    100: '#efefef',
    400: grey,
    900: darken(0.25, setSaturation(0.2, grey)),
    A400: grey,
  }),
  success: buildColor({
    50: lighten(0.35, success),
    400: success,
    900: darken(0.25, setSaturation(0.2, success)),
    A400: successA,
  }),
  danger: buildColor({
    50: lighten(0.6, danger),
    400: danger,
    900: darken(0.2, setSaturation(0.6, danger)),
    A400: dangerA,
  }),
}

export const light = {
  color: {
    ...palette,
    background: palette.grey[50],
  },
}
