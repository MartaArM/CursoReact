// Nombre del Router Principal

import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"

export const AppRouter = () => {
  return (
    <>
        {/* <Navbar/> {/* Barra de navegación */}

        <Routes>

            <Route path="login" element={
              <PublicRoutes> {/* Si no está logeado, no deja entrar */}
                <LoginPage />
              </PublicRoutes>
            } />


            {/* <Route path="login" element={<LoginPage />} /> */}

            <Route path="/*" element={
              <PrivateRoutes> {/* Si no está logeado, no deja entrar */}
                <HeroesRoutes />
              </PrivateRoutes>
            } />
             {/* <Route path="/*" element={<HeroesRoutes />} /> */}

        </Routes>
    </>
  )
}
