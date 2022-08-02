import { Box } from '@mui/material'
import React from 'react'

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex'}}>


        <Box component='main' sx={{ flexGrow: 1, p:3}}>
            {children}
        </Box>

    </Box>
  )
}
