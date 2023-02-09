import React, { FC } from 'react'
import { Grid } from '@mui/material'

interface HeaderProps {
  children?: React.ReactNode
}

const Header: FC<HeaderProps> = ({ children }) => {
  const g = 'd'
  return (
    <header>
      <Grid>
        {children}
        <Grid item>
          <Grid item>
            logo
          </Grid>
          <Grid item>
            Search input
          </Grid>
        </Grid>
        <Grid item>name</Grid>
      </Grid>
    </header>
  )
}

export default Header
