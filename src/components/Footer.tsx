import React, { Dispatch, FC, SetStateAction } from 'react'
import { Button } from '@mui/material'
import { ThemeModes } from '~/types/interfaces/shared'

interface FooterProps {
  setMode: Dispatch<SetStateAction<'light' | 'dark'>>
}

const Footer: FC<FooterProps> = ({
  setMode
}) => {
  const toggleMode = () => {
    setMode((prev) => (prev === ThemeModes.dark ? ThemeModes.light : ThemeModes.dark))
  }

  return (
    <footer>
      <Button onClick={toggleMode} variant="contained" color="primary">mode</Button>
    </footer>
  )
}

export default Footer
