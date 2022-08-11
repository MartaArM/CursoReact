import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material'
import React from 'react'

export const ListNotes = ({nota}) => {
  return (
    <ListItem key={ nota.id } disablePadding>
        <ListItemButton>
            {/* Icono de la lista */}
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            {/* Elementos de la lista */}
            <Grid container>
                <ListItemText primary= {nota.title} />
                <ListItemText secondary={nota.body} />
            </Grid>
        </ListItemButton>

    </ListItem>
  )
}
