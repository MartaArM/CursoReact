import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { CalendarPage } from '../calendar/pages/CalendarPage'

export const AppRouter = () => {

    // const status = 'non-authenticated'; //useStatus();
    const status = 'authenticated';

    // if (status == 'checking') {
    //   return <CheckingAuth /> // Si estamos comprobando el login, se carga una pantalla de espera con un circulo cargando
    // }
    // else {
    return (
    <Routes>

        { ( status == 'authenticated')
             ? <Route path="/*" element={<CalendarPage /* Diario / journal */ />} /> 
             : <Route path="auth/*" element={<LoginPage /* Login y registro */ />}/> 
        }

        <Route path='/*' element = {<Navigate to='/auth/login' />} />

    </Routes>
    )  
    // }
  
}
