import React, { Dispatch, FC, SetStateAction } from 'react'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import { Button, Container } from '@mui/material'
import { ThemeModes } from '~/types/interfaces/shared'

interface LayoutProps {
  children: React.ReactNode
  setMode: Dispatch<SetStateAction<'light' | 'dark'>>
}

const Layout: FC<LayoutProps> = ({ children, setMode }) => {
  const toggleMode = () => {
    setMode((prev) => (prev === ThemeModes.dark ? ThemeModes.light : ThemeModes.dark))
  }

  return (
    <Container>
      <Header />
      <Button onClick={toggleMode} variant="contained" color="primary">mode</Button>
      {children}
      <Footer />
    </Container>
  )
}

export default Layout
