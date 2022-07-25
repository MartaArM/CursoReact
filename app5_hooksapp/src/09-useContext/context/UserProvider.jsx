import { useState } from 'react'
import { UserContext } from './UserContext'

// const user = {
//     id: 1,
//     name: "Marta Arenas",
//     email: "marta@gmail.com"
// }

export const UserProvider = ({children}) => {

    const [user, setUser] = useState();

    

    return (
        // Los valores en "value" son los que cualquier hijo de UserProvider va a poder obtener 
        <UserContext.Provider value={{user: user, setUser: setUser}}> 
            {children}
        </UserContext.Provider>
    )
}
