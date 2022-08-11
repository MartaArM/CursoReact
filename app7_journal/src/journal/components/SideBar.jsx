
import { Box, Divider, Drawer, List, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { ListNotes } from './ListNotes';

export const SideBar = () => {

    const {displayName} = useSelector(state => state.auth);
    const {notes} = useSelector(state => state.journal);


  return (
    <Box 
    component='nav'
    sx={{width: {sm: 240}, flexShrink: {sm: 0}}}>

        <Drawer
        variant='permanent'
        open
        
        sx = {{
            display: {xs: 'block'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: 240, backgroundColor: 'light.main'}
        }}
        >
            <Toolbar sx={{backgroundColor: 'primary.main'}}>
                {/* Titulo del menú lateral */}
                <Typography variant='h6' noWrap component='div'>
                    {displayName}
                </Typography>
            </Toolbar>
            {/* División entre el título y los elementos del diario */}
            <Divider />

            <List>
                {
                    notes.map ((nota) => (
                        <ListNotes key={nota.id} nota={nota} />
                    ))
                }
            </List>
        </Drawer>
         
    </Box>
  )
}
