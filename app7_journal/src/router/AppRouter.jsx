
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { useStatus } from "../hooks/useStatus"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui/components/CheckingAuth"

export const AppRouter = () => {

    const status = useStatus();

    if (status == 'checking') {
      return <CheckingAuth /> // Si estamos comprobando el login, se carga una pantalla de espera con un circulo cargando
    }
    else {
      return (
        <Routes>

          { ( status == 'authenticated') ? 
            <Route path="/*" element={<JournalRoutes /* Diario / journal */ />} /> : // Si estoy autenticado, me lleva al journal
            <Route path="auth/*" element={<AuthRoutes /* Login y registro */ />}/> // Si no estoy autenticado, puedo ir al login y al register
          }

          <Route path='/*' element = {<Navigate to='/auth/login' />} />

        </Routes>
      )  
    }
  
}
