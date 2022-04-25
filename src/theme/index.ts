import { createTheme as createMuiTheme } from '@mui/material/styles'
import { baseThemeOptions } from './base-theme-options'
import { lightThemeOptions } from './light-theme-options'

export const createTheme = () => {
  const theme = createMuiTheme(baseThemeOptions, lightThemeOptions,
    {
    })
  return theme
}
