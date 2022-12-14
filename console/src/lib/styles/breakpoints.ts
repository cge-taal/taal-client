export enum Breakpoint {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export const getBreakpointForMediaSize = (mediaSize: number) => {
  switch (mediaSize) {
    case 0:
      return Breakpoint.xs
    case 1:
      return Breakpoint.sm
    case 2:
      return Breakpoint.md
    case 3:
      return Breakpoint.lg
    case 4:
      return Breakpoint.xl
  }
}

export const breakpoints = {
  xs: '375px',
  sm: '768px',
  md: '1180px',
  lg: '1440px',
  xl: '1920px',
}

export const medium = `(min-width: ${breakpoints.md})`
export const large = `(min-width: ${breakpoints.lg})`
