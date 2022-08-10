
import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui/components/CheckingAuth"

export const AppRouter = () => {

  const {status} = useSelector( state => state.auth);

  if (status == 'checking') {
    return <CheckingAuth /> // Si estamos comprobando el login, se carga una pantalla de espera con un circulo cargando
  }
  else {
    return (
      <Routes>

          {/* Login y registro */}
          <Route path="auth/*" element={<AuthRoutes />}/>

          {/* Diario / journal */}
          <Route path="/*" element={<JournalRoutes />} />

      </Routes>
    )  
  }
  
}
