export type ThemeMode = keyof typeof ThemeModes

export enum ThemeModes {
  light = 'light',
  dark = 'dark'
}

export interface DropdownOption {
  value: string | number
  label: string
}
