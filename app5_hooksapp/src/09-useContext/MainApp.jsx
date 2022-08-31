import { Link, Navigate, Route, Routes } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { UserProvider } from "./context/UserProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { NavBar } from "./NavBar"
import { NotFoundPage } from "./NotFoundPage"

export const MainApp = () => {
    return (
        <UserProvider> {/*Todos los componentes pueden acceder a los valores del UserProvider */}
            <NavBar/> {/* Barra de navegación */}

            <br/>

            
            <Routes>
                <Route path="/" element= { <HomePage/> }/>
                <Route path="login" element= { <LoginPage/> }/> {/*Si escribo http://localhost:3000/login me sale la página de Main con la página de Login*/}
                <Route path="about" element= { <AboutPage/> }/>

                <Route path="/*" element={ <NotFoundPage/>}/>  {/*Por si meten una ruta que no existe*/}
                {/* <Route path="/*" element={ <Navigate to="/" /> } /> { / * Esto lo que hace es que si metes una ruta que no existe, te 
                                                                              lleva a la página principal. */}


            </Routes>
        </UserProvider>
    )
}
