import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate, useLocation} from "react-router-dom";

export const PrivateRoutes = ( {children} ) => {

    const {state} = useContext(AuthContext);
    const {pathname, search} = useLocation();
    const lastpath = pathname + search;

    localStorage.setItem('lastpath', lastpath);

    const logged = state.logged;

    return (logged) ? children :  <Navigate to="/login"/> // Si el usuario no está logeado, navega al login, y si si, va a las rutas del "children" que son el resto
}
