import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'
import Layout from '~/components/Layout'
import { useState } from 'react'
import getTheme from '~/theme'
import { ThemeMode, ThemeModes } from '~/types/interfaces/shared'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

export default function App({
  Component,
  pageProps
}: AppProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const initMode: ThemeMode = prefersDarkMode ? ThemeModes.dark : ThemeModes.light
  const [mode, setMode] = useState(initMode)
  const theme = getTheme(mode)
  const cache = createCache({
    key: 'custom'
  })

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout setMode={setMode}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}
