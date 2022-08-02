import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const SideBar = () => {
  return (
    <Box 
    component='nav'
    sx={{width: {sm: 240}, flexShrink: {sm: 0}}}>

        <Drawer
        variant='permanent'
        open
        sx = {{
            display: {xs: 'block'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: 240}
        }}
        >
            <Toolbar>
                {/* Titulo del menú lateral */}
                <Typography variant='h6' noWrap component='div'>
                    Marta
                </Typography>
            </Toolbar>
            {/* División entre el título y los elementos del diario */}
            <Divider />

            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril'].map ((text) => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                {/* Icono de la lista */}
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                {/* Elementos de la lista */}
                                <Grid container>
                                    <ListItemText primary= {text} />
                                    <ListItemText secondary={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
                                </Grid>
                            </ListItemButton>

                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
         
    </Box>
  )
}
