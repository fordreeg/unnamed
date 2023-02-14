import React, { Dispatch, FC, SetStateAction } from 'react'
import ModeSwitch from '~/components/ModeSwitch'
import Dropdown from '~/components/Dropdown'
import { Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

interface FooterProps {
  setMode: Dispatch<SetStateAction<'light' | 'dark'>>
  mode: 'light' | 'dark'
}

const Footer: FC<FooterProps> = ({
  setMode,
  mode
}) => {
  const { classes } = useStyles()
  const currentLanguage = 'en'
  const options = [{
    value: 'en',
    label: 'English'
  }, {
    value: 'ua',
    label: 'Ukrainian'
  }, {
    value: 'ru',
    label: 'Russian'
  }]

  const currentOption = options.find((opt) => opt.value === currentLanguage)

  return (
    <footer>
      <Box className={classes.root}>
        <ModeSwitch setMode={setMode} mode={mode} />
        <Dropdown
          options={options}
          value={currentOption?.value}
          label="Language"
          className={classes.dropdown}
        />
      </Box>

    </footer>
  )
}

const useStyles = makeStyles()(
  () => ({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    dropdown: {
      '.MuiSelect-select': {
        padding: '0.75rem 1rem'
      }
    }
  })
)

export default Footer
