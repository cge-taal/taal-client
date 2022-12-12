import { palette } from '../constants/colour'
import { elevation } from '../constants/elevation'
import { grid } from '../constants/grid'
import { padding, spacing } from '../constants/spacer'
// import { fontFamily, fontSize, fontWeight, lineHeight } from '../constants/typography'
import { body, display, heading, numeric } from '../constants/typography'
import { component } from '../components/component'
import { input } from '../components/input'
import { dropdown } from '../components/dropdown'
import { checkbox } from '../components/checkbox'
import { radio } from '../components/radio'
import { switchh } from '../components/switch'
import { tab } from '../components/tab'

export const defaults = {
  // default
  box: {
    sizing: 'border-box',
  },
  font: {
    family: 'Inter',
  },
  // constants
  color: { ...palette },
  elevation: { ...elevation },
  grid: { ...grid },
  padding: { ...padding },
  spacing: { ...spacing },
  typo: {
    // font: {
    //   family: { ...fontFamily },
    //   size: { ...fontSize },
    //   weight: { ...fontWeight },
    // },
    // line: {
    //   height: { ...lineHeight },
    // },
    body: { ...body },
    display: { ...display },
    heading: { ...heading },
    numeric: { ...numeric },
  },
  // component
  comp: { ...component },
  input: { ...input },
  dropdown: { ...dropdown },
  checkbox: { ...checkbox },
  radio: { ...radio },
  switch: { ...switchh },
  tab: { ...tab },
}
