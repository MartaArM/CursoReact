import { Box } from '@mui/material'
import React from 'react'
import { NavBar } from '../components/NavBar'
import { SideBar } from '../components/SideBar'

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex'}}>

        <NavBar />

        <SideBar/>

        <Box component='main' sx={{ flexGrow: 1, p:3}}>
            {children}
        </Box>

    </Box>
  )
}
