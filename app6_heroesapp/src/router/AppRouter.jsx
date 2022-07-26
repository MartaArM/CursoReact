// Nombre del Router Principal

import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { Navbar } from "../heroes/components/NavBar"
import { DCPage } from "../heroes/pages/DCPage"
import { MarvelPage } from "../heroes/pages/MarvelPage"

export const AppRouter = () => {
  return (
    <>
        <Navbar/> {/*Barra de navegación */}

        <Routes>
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DCPage />} />

            <Route path="login" element={<LoginPage />} />

            <Route path="/" element={<Navigate to="marvel" />} />
        </Routes>
    </>
  )
}
