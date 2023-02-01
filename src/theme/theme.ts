import { createTheme, responsiveFontSizes, Theme } from '@mui/material'
import { ThemeMode } from '~/types/interfaces/shared'
import Palettes from '~/theme/palette'
import Typography from '~/theme/typography'
import Overrides from '~/theme/overrides'

type IMUITheme = (mode: ThemeMode) => Theme

const MUITheme: IMUITheme = (mode: ThemeMode) => createTheme({
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 666,
      md: 1024,
      lg: 1280,
      xl: 1536
    }
  },
  palette: {
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
  },
  typography: { ...Typography },
  components: { ...Overrides }
})

const getTheme = (mode: ThemeMode) => responsiveFontSizes(MUITheme(mode))

export default getTheme
