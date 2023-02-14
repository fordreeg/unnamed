import React, { FC } from 'react'
import { OutlinedInput } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'

interface ISearchInput {
}

const SearchInput: FC<ISearchInput> = () => {
  const { classes } = useStyles()

  return (
    <OutlinedInput
      className={classes.wrapper}
      id="outlined-adornment-amount"
      placeholder="Search for something here..."
      startAdornment={(
        <SearchOutlinedIcon />
      )}
    />
  )
}

export default SearchInput

const useStyles = makeStyles()(
  (theme) => ({
    wrapper: {
      width: '100%',
      borderRadius: '0.5rem',
      input: {
        padding: '0.6rem'
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.text.secondary
      },
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.text.secondary
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderWidth: '1px',
        borderColor: theme.palette.text.secondary
      }
    }
  })
)
