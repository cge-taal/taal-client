import { writable } from 'svelte/store'

// header
export const menuLinks = writable<{ path: string; label: string; selected?: boolean }[]>([])
export const menuActions = writable<{ path: string; label: string; selected?: boolean }[]>([])
export const headerHeight = writable(0)

// media queries
export const mediaSize = writable('large')

// content
export const pageContentOffsetX = writable(0)

// spinner
export const spinCount = writable(0)

// theme
export const theme = writable(
  localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
)
export const themeNs = writable('')