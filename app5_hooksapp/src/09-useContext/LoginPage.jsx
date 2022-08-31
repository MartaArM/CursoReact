import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    // useContext para poder usar el usuario y la funcion para crearlo
    const {user, setUser} = useContext(UserContext);

    return (
        <>
            <h2>Login Page</h2>
            <hr/>

            <button className="btn btn-primary"
            // Cuando le damos al botón, creamos el usuario
            onClick={() => setUser({id: 123, name: "Marta", email: "marta@gmail.com"})}>
                Crear usuario
            </button>
        </>
    )
}
