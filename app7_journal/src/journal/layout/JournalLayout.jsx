import { Box } from '@mui/material'
import React from 'react'
import { NavBar } from '../components/NavBar'

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex'}}>

        <NavBar />

        <Box component='main' sx={{ flexGrow: 1, p:3}}>
            {children}
        </Box>

    </Box>
  )
}
