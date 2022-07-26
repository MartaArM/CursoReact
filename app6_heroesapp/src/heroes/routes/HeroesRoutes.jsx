import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/NavBar"
import { DCPage } from "../pages/DCPage"
import { HeroeByIdPage } from "../pages/HeroeByIdPage"
import { MarvelPage } from "../pages/MarvelPage"
import { SearchPage } from "../pages/SearchPage"

// Muestra las rutas correspondientes a los héreos
export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className='container'>
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DCPage />} />

                <Route path="search" element={<SearchPage />} />
                {/* Muestra un héroe por id */}
                <Route path="hero/:id" element={<HeroeByIdPage />} />

                <Route path="/" element={<Navigate to="marvel" />} />
            </Routes>
        </div>
    </>
  )
}
