import { Components } from '@mui/material/styles/components'
import { Theme } from '@mui/material'

const Overrides: Components<Theme> = {
  MuiCssBaseline: {
    styleOverrides: {
      '@global': {
        'html, body': {
          fontFamily: 'Montserrat, sans-serif',
          minHeight: '100vh',
          margin: 0
        }
      }
    }
  }
}

export default Overrides
