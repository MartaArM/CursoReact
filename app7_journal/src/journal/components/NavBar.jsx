import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import {LogoutOutlined, MenuOutlined} from '@mui/icons-material'

export const NavBar = () => {
  return (
    <AppBar position='fixed' sx={{width: {sm: 'calc(100% - 240px)'}, ml: {sm: '240px'}}}>
        <Toolbar>
            <IconButton sx={{mr: 2}}>
                <MenuOutlined />
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'>
                    Journal App
                </Typography>

                <IconButton color='error'>
                    <LogoutOutlined />
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
