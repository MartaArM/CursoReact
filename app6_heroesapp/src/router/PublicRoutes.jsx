import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate} from "react-router-dom";

export const PublicRoutes = ({children}) => {
    const {state} = useContext(AuthContext);
    const logged = state.logged;

    const lastpath = localStorage.getItem('lastpath');

    return (!logged) ? children :  <Navigate to={lastpath}/> 
}
