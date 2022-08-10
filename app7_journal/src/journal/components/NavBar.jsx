import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import {LogoutOutlined, MenuOutlined} from '@mui/icons-material'

export const NavBar = () => {
  return (
    // Position fixed es para que no se mueva.
    // sm: 'calc(100% - 240px)'} : el tamaño es el total menos 240px
    // ml: {sm: '240px'}:  margen izquierdo de 240px
    // AppBa: la barra de aplicaciones muestra información y acciones relacionadas con la pantalla actual
    <AppBar position='fixed' sx={{width: {sm: 'calc(100% - 240px)'}, ml: {sm: '240px'}}}>
         <Toolbar> {/* Barra de herramientas */}
            {/*Boton con icono */}  
            <IconButton sx={{mr: 2}}>
                <MenuOutlined /> {/* Icono */}
            </IconButton>

            {/* justifyContent: 'space-between': distribuir items uniformemente. El primer item al inicio, el
            último al final.
                alignItems: 'center': se alinean los elementos en el centro de forma vertical.
                variant especifica que estilo debe tener el componente
            */}
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'>
                    Journal App
                </Typography>

                <IconButton sx = {{color: 'white'}}>
                    <LogoutOutlined />
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
