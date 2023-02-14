import * as React from 'react'
import { FC, useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { makeStyles } from 'tss-react/mui'
import { DropdownOption } from '~/types/interfaces/shared'
import { SelectProps } from '@mui/material/Select/Select'

interface DropdownProps extends SelectProps {
  options: DropdownOption[],
  value?: string | number
}

const Dropdown: FC<DropdownProps> = ({
  options,
  value,
  label,
  className
}) => {
  const [controlledValue, setControlledValue] = useState(value || '')
  const { classes } = useStyles()

  const handleSelectValue = (newValue: DropdownOption['value']) => {
    setControlledValue(newValue)
  }

  return (
    <Box className={classes.root}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={controlledValue}
          label={label}
          className={className}
        >
          {
            options.map(({
              label: itemLabel,
              value: itemValue
            }) => (
              <MenuItem
                key={itemValue}
                value={itemValue}
                onClick={() => handleSelectValue(itemValue)}
              >
                {itemLabel}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  )
}

const useStyles = makeStyles()(
  () => ({
    root: {
      minWidth: '10rem'
    }
  })
)

export default Dropdown
