import { palette, white } from '../constants/colour'

import {
  ComponentBorderRadius,
  ComponentHeight,
  ComponentIconSize,
  ComponentLetterSpacing,
} from './defaults'
import { toUnit } from '../utils/css'
import { InputStyleSize } from '../types/input'
import { fontFamily } from '../constants/typography'
import { body } from '../constants/typography'

export const InputPaddingX = {
  sm: 16,
  md: 16,
  lg: 16,
}

export const InputPaddingY = {
  sm: 7,
  md: 10,
  lg: 14,
}

export const TypoBodySize = {
  sm: 4,
  md: 3,
  lg: 3,
}

const sizes = Object.values(InputStyleSize)

export const input = {
  font: {
    family: fontFamily.inter,
    weight: 400,
  },
  placeholder: {
    color: palette.gray[300],
  },
  size: {
    ...sizes.reduce(
      (acc, size) => ({
        ...acc,
        [size]: {
          height: toUnit(ComponentHeight[size]),
          padding: `${toUnit(InputPaddingY[size])} ${toUnit(InputPaddingX[size])}`,
          border: {
            radius: toUnit(ComponentBorderRadius[size]),
          },
          icon: {
            size: toUnit(ComponentIconSize[size]),
          },
          ...body[TypoBodySize[size]],
          letter: {
            spacing: ComponentLetterSpacing,
          },
        },
      }),
      {}
    ),
  },
  default: {
    enabled: {
      color: palette.gray[800],
      bg: {
        color: white,
      },
      border: {
        color: palette.gray[300],
      },
    },
    hover: {
      color: palette.gray[800],
      bg: {
        color: white,
      },
      border: {
        color: palette.gray[300],
      },
    },
    active: {
      color: palette.gray[800],
      bg: {
        color: white,
      },
      border: {
        color: palette.primary[600],
      },
    },
    focus: {
      color: palette.gray[800],
      bg: {
        color: white,
      },
      border: {
        color: palette.primary[600],
      },
    },
    disabled: {
      color: palette.gray[500],
      bg: {
        color: palette.gray[200],
      },
      border: {
        color: palette.gray[200],
      },
    },
    invalid: {
      border: {
        color: palette.danger[600],
      },
    },
  },
}
