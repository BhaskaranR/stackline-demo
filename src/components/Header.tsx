import type { FC } from 'react'
import { AppBar, Toolbar } from '@mui/material'
import Logo from '/src/assets/icons/logo.svg'

const Header: FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <img alt="" src={Logo} style={{ width: 50, height: 50 }} />
      </Toolbar>
    </AppBar>
  )
}

export default Header
