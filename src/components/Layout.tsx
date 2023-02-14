import React, { Dispatch, FC, SetStateAction } from 'react'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import { Grid } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

interface LayoutProps {
  children: React.ReactNode
  setMode: Dispatch<SetStateAction<'light' | 'dark'>>
  mode: 'light' | 'dark'
}

const Layout: FC<LayoutProps> = ({
  children,
  mode,
  setMode
}) => {
  const { classes } = useStyles()

  return (
    <Grid className={classes.container}>
      <Header />
      <Grid component="main" className={classes.main}>
        {children}
      </Grid>
      <Footer setMode={setMode} mode={mode} />
    </Grid>
  )
}

const useStyles = makeStyles()(
  () => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      padding: '1.5rem 1.5rem 1rem'
    },
    main: {
      flex: 1
    }
  })
)

export default Layout
