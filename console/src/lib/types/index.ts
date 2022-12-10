export enum ComponentSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
  xlarge = 'xlarge',
}
export type ComponentSizeType = `${ComponentSize}`

export enum ComponentStyleSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}
export type ComponentStyleSizeType = `${ComponentStyleSize}`

export const getStyleSizeFromComponentSize = (cs: ComponentSizeType) => {
  switch (cs) {
    case ComponentSize.small:
      return ComponentStyleSize.sm
    case ComponentSize.medium:
      return ComponentStyleSize.md
    case ComponentSize.large:
      return ComponentStyleSize.lg
    case ComponentSize.xlarge:
      return ComponentStyleSize.xl
  }
}

export enum ComponentState {
  enabled = 'enabled',
  hover = 'hover',
  active = 'active',
  focus = 'focus',
  disabled = 'disabled',
}
export type ComponentStateType = `${ComponentState}`

export enum ComponentVariant {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  ghost = 'ghost',
  destructive = 'destructive',
}
export type ComponentVariantType = `${ComponentVariant}`

export enum FlexDirection {
  row = 'row',
  rowReverse = 'row-reverse',
  column = 'column',
  columnReverse = 'column-reverse',
}
export type FlexDirectionType = `${FlexDirection}`

export enum LabelPlacement {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
}
export type LabelPlacementType = `${LabelPlacement}`

export enum LabelAlignment {
  start = 'start',
  center = 'center',
  end = 'end',
}
export type LabelAlignmentType = `${LabelAlignment}`
