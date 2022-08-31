import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { NavBar } from '../components/NavBar'
import { SideBar } from '../components/SideBar'

export const JournalLayout = ({children}) => {
  return (
    <Box className="animate__animated animate__fadeIn" sx={{ display: 'flex'}}>

        <NavBar />

        <SideBar/>

        <Box component='main' sx={{ flexGrow: 1, p:3}}>
            <Toolbar /> 
            {children}
        </Box>

    </Box>
  )
}
