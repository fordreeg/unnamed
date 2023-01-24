import '@fontsource/montserrat/300.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/700.css'
import '@/styles/globals.css'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import type {AppProps} from 'next/app'
import {green} from "@mui/material/colors";
import {CssBaseline} from "@mui/material";
import Layout from "@/components/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

export default function App({Component, pageProps}: AppProps) {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
