import { useState } from 'react'
import { UserContext } from './UserContext'

// const user = {
//     id: 1,
//     name: "Marta Arenas",
//     email: "marta@gmail.com"
// }

export const UserProvider = ({children}) => {

    const [user, setUser] = useState(); // Para poder actualizar el user en otras páginas

    

    return (
        // Los valores en "value" son los que cualquier hijo de UserProvider va a poder obtener 
        <UserContext.Provider value={{user: user, setUser: setUser}}> {/* Pasamos el user y la función para crearlo */} 
            {children}
        </UserContext.Provider>
    )
}
