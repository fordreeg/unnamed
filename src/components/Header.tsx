import React, { FC } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import NextLink from 'next/link'
import Logo from '~/assets/svg/logo.svg'
import Avatar from '~/assets/img/avatar.jpg'
import { makeStyles } from 'tss-react/mui'
import SearchInput from '~/components/SearchInput'
import Image from 'next/image'

interface HeaderProps {
  children?: React.ReactNode
}

const Header: FC<HeaderProps> = ({ children }) => {
  const { classes } = useStyles()
  const userName = 'John Doe'
  const isAuth = false

  return (
    <header>
      <Grid display="flex" alignItems="center">
        {children}
        <Grid item width="20rem">
          <NextLink href="/" className={classes.logoName}>
            <Box display="flex" alignItems="center">
              <Logo className={classes.logo} />
              <Typography variant="h5" component="h4">Unnamed</Typography>
            </Box>
          </NextLink>
        </Grid>
        {isAuth
          && (
          <Grid item display="flex" justifyContent="space-between" width="100%" alignItems="center">
            <Grid item className={classes.searchInput}><SearchInput /></Grid>
            <Grid item className={classes.userName}>
              <Box component="div">
                <Typography
                  variant="h5"
                  component="h4"
                >
                  {userName}
                </Typography>
              </Box>
              <Image src={Avatar} alt="avatar" className={classes.avatar} />
            </Grid>
          </Grid>
          )}

      </Grid>
    </header>
  )
}

export default Header

const useStyles = makeStyles()(
  (theme) => ({
    logo: {
      width: '35px',
      height: '35px',
      marginRight: theme.spacing(1)
    },
    logoName: {
      textDecoration: 'none',
      color: theme.palette.text.primary,
      fill: theme.palette.text.primary
    },
    searchInput: {
      maxWidth: '34rem',
      width: '100%'
    },
    userName: {
      display: 'flex',
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.spacing(0.5),
      boxShadow: '0 0 0.875rem -2px rgb(0 0 0 / 10%)',

      div: {
        padding: theme.spacing(0.5, 1),
        maxWidth: '13.125rem'
      },
      h4: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }
    },
    avatar: {
      width: '45px',
      height: '45px',
      borderRadius: theme.spacing(0.5)
    }
  })
)
