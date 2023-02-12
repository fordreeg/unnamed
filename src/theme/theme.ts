import { createTheme, Theme } from '@mui/material'
import { ThemeMode } from '~/types/interfaces/shared'
import Palette from '~/theme/palette'
import Typography from '~/theme/typography'
import Overrides from '~/theme/overrides'

type IMUITheme = (mode: ThemeMode) => Theme

const MUITheme: IMUITheme = (mode: ThemeMode) => createTheme({
  spacing: 16,
  breakpoints: {
    values: {
      xs: 0,
      sm: 666,
      md: 1024,
      lg: 1280,
      xl: 1536
    }
  },
  palette: Palette(mode),
  typography: { ...Typography },
  components: { ...Overrides }
})

const getTheme = (mode: ThemeMode) => MUITheme(mode)

export default getTheme
