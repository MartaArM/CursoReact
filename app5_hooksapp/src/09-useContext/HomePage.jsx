import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

    const {user} = useContext(UserContext);

    return (
        <>
            <h2>Home Page</h2>
            <hr/>

            {/* Imprimimos el usuario */}
            <p>{JSON.stringify(user, null, 3)}</p>
        </>
    )
}
