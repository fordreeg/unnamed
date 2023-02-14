import { PaletteOptions } from '@mui/material/styles/createPalette'
import { ThemeMode } from '~/types/interfaces/shared'

interface IPalettes {
  light: PaletteOptions
  dark: PaletteOptions
}

const Palettes: IPalettes = {
  light: {
    background: {
      paper: '#F9FAFB',
      default: '#FFFFFF'
    },
    text: {
      primary: '#4E5D78',
      secondary: '#979EAC',
      disabled: '#DCDFE4'
    },
    divider: '#DCDFE4'
  },
  dark: {
    text: {
      primary: '#FFFFFF',
      secondary: '#979EAC',
      disabled: '#DCDFE4'
    },
    background: {
      paper: '#212833',
      default: '#191C21'
    },
    divider: '#212833'
  }
}

const Palette = (mode: ThemeMode) => ({
  mode,
  primary: {
    main: '#4E5D78',
    light: '#717D93'
  },
  secondary: {
    main: '#377DFF'
  },
  error: {
    main: '#FF5630'
  },
  success: {
    main: '#38CB89',
    light: '#D7F5E7'
  },
  ...Palettes[mode]
})

export default Palette
