import { PaletteOptions } from '@mui/material/styles/createPalette'

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

export default Palettes
