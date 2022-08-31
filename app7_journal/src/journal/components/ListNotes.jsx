import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material'
import React, { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal/journalSlice'

export const ListNotes = ({nota}) => {

    const dispatch = useDispatch();

    const onSelectNote = () => {
        dispatch(setActiveNote(nota));
    }
    

  return (
    <ListItem key={ nota.id } disablePadding>
        <ListItemButton onClick={ onSelectNote}  >
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
