import { palette, transparent, white } from '../constants/colour'

import {
  ComponentBorderRadius,
  ComponentBorderWidth,
  ComponentFocusRectWidth,
  ComponentHeight,
  ComponentHeadingSize,
  ComponentIconSize,
} from './defaults'
import { toUnit } from '../utils/css'

export const component = {
  box: {
    sizing: 'border-box',
  },
  font: {
    family: 'Inter',
  },
  border: {
    width: toUnit(ComponentBorderWidth),
  },
  focus: {
    rect: {
      color: palette.primary[500],
      width: toUnit(ComponentFocusRectWidth),
    },
  },
  size: {
    sm: {
      height: toUnit(ComponentHeight.sm),
      heading: {
        size: toUnit(ComponentHeadingSize.sm),
      },
      icon: {
        size: toUnit(ComponentIconSize.sm),
      },
      border: {
        radius: toUnit(ComponentBorderRadius.sm),
      },
    },
    md: {
      height: toUnit(ComponentHeight.md),
      heading: {
        size: toUnit(ComponentHeadingSize.md),
      },
      icon: {
        size: toUnit(ComponentIconSize.md),
      },
      border: {
        radius: toUnit(ComponentBorderRadius.md),
      },
    },
    lg: {
      height: toUnit(ComponentHeight.lg),
      heading: {
        size: toUnit(ComponentHeadingSize.lg),
      },
      icon: {
        size: toUnit(ComponentIconSize.lg),
      },
      border: {
        radius: toUnit(ComponentBorderRadius.lg),
      },
    },
    xl: {
      height: toUnit(ComponentHeight.xl),
      heading: {
        size: toUnit(ComponentHeadingSize.xl),
      },
      icon: {
        size: toUnit(ComponentIconSize.xl),
      },
    },
    border: {
      radius: toUnit(ComponentBorderRadius.xl),
    },
  },
  primary: {
    enabled: {
      color: palette.gray[800],
      bg: {
        color: palette.accent[600],
      },
      border: {
        color: transparent,
      },
    },
    hover: {
      color: palette.gray[800],
      bg: {
        color: palette.accent[700],
      },
      border: {
        color: transparent,
      },
    },
    active: {
      color: palette.gray[800],
      bg: {
        color: palette.accent[800],
      },
      border: {
        color: transparent,
      },
    },
    focus: {
      color: palette.gray[800],
      bg: {
        color: palette.accent[600],
      },
      border: {
        color: white,
      },
    },
    disabled: {
      color: palette.gray[500],
      bg: {
        color: palette.gray[200],
      },
      border: {
        color: transparent,
      },
    },
  },
  secondary: {
    enabled: {
      color: white,
      bg: {
        color: palette.primary[600],
      },
      border: {
        color: transparent,
      },
    },
    hover: {
      color: white,
      bg: {
        color: palette.primary[700],
      },
      border: {
        color: transparent,
      },
    },
    active: {
      color: white,
      bg: {
        color: palette.primary[800],
      },
      border: {
        color: transparent,
      },
    },
    focus: {
      color: white,
      bg: {
        color: palette.primary[600],
      },
      border: {
        color: white,
      },
    },
    disabled: {
      color: palette.gray[500],
      bg: {
        color: palette.gray[200],
      },
      border: {
        color: transparent,
      },
    },
  },
  tertiary: {
    enabled: {
      color: palette.primary[600],
      bg: {
        color: white,
      },
      border: {
        color: palette.primary[600],
      },
    },
    hover: {
      color: white,
      bg: {
        color: palette.primary[600],
      },
      border: {
        color: transparent,
      },
    },
    active: {
      color: white,
      bg: {
        color: palette.primary[700],
      },
      border: {
        color: transparent,
      },
    },
    focus: {
      color: white,
      bg: {
        color: palette.primary[600],
      },
      border: {
        color: white,
      },
    },
    disabled: {
      color: palette.gray[400],
      bg: {
        color: white,
      },
      border: {
        color: palette.gray[400],
      },
    },
  },
  ghost: {
    enabled: {
      color: palette.primary[600],
      bg: {
        color: transparent,
      },
      border: {
        color: transparent,
      },
    },
    hover: {
      color: palette.primary[600],
      bg: {
        color: palette.primary[100],
      },
      border: {
        color: transparent,
      },
    },
    active: {
      color: palette.primary[600],
      bg: {
        color: palette.primary[200],
      },
      border: {
        color: transparent,
      },
    },
    focus: {
      color: palette.primary[600],
      bg: {
        color: white,
      },
      border: {
        color: white,
      },
    },
    disabled: {
      color: palette.gray[400],
      bg: {
        color: white,
      },
      border: {
        color: transparent,
      },
    },
  },
  destructive: {
    enabled: {
      color: white,
      bg: {
        color: palette.danger[600],
      },
      border: {
        color: transparent,
      },
    },
    hover: {
      color: white,
      bg: {
        color: palette.danger[700],
      },
      border: {
        color: transparent,
      },
    },
    active: {
      color: white,
      bg: {
        color: palette.danger[800],
      },
      border: {
        color: transparent,
      },
    },
    focus: {
      color: white,
      bg: {
        color: palette.danger[600],
      },
      border: {
        color: white,
      },
    },
    disabled: {
      color: palette.gray[500],
      bg: {
        color: palette.gray[200],
      },
      border: {
        color: transparent,
      },
    },
  },
}
