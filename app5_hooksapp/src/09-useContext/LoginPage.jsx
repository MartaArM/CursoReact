import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    const {user, setUser} = useContext(UserContext);

    return (
        <>
            <h2>Login Page</h2>
            <hr/>

            <button className="btn btn-primary"
            onClick={() => setUser({id: 123, name: "Marta", email: "marta@gmail.com"})}>
                Crear usuario
            </button>
        </>
    )
}
