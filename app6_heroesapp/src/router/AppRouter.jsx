// Nombre del Router Principal

import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"

export const AppRouter = () => {
  return (
    <>
        {/* <Navbar/> {/* Barra de navegación */}

        <Routes>

            <Route path="login" element={<LoginPage />} />
            <Route path="/*" element={<HeroesRoutes />} />

        </Routes>
    </>
  )
}
