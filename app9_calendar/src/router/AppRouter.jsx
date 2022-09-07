import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { CalendarPage } from '../calendar/pages/CalendarPage'
import { useAuthStore } from '../hooks/useAuthStore'

export const AppRouter = () => {

    const {status, checkAuthToken} = useAuthStore();

    useEffect(() => {
      //checkAuthToken();
    }, []);
    

    // const status =  'checking'; //'authenticated';

    // if (status == 'checking') {
    //   return <CheckingAuth /> // Si estamos comprobando el login, se carga una pantalla de espera con un circulo cargando
    // }
    // else {

    if (status == 'checking') {
      <h3>Cargando...</h3>
    }

    return (
    <Routes>

        { ( status == 'not-authenticated')
             ? (
              <>
                  <Route path="auth/*" element={<LoginPage /* Login y registro */ />}/> 
                  <Route path='/*' element = {<Navigate to='/auth/login' />} />
              </>
             )
             : (
              <>
                  <Route path="/" element={<CalendarPage /* Diario / journal */ />} /> 
                  <Route path='/*' element = {<Navigate to='/' />} />
              </>
             ) 
             
             
        }

        

    </Routes>
    )  
    // }
  
}
