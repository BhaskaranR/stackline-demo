import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './styles/main.css'
import { ThemeProvider } from '@mui/material/styles'
import App from './App'
import { createTheme } from './theme'

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <ThemeProvider theme={createTheme()}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
