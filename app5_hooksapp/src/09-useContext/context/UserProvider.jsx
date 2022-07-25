import { UserContext } from './UserContext'

export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{hola: "Mundo"}}> {/*El valor hola es lo que cualquier hijo de UserProvider va a poder obtener */}
        {children}
    </UserContext.Provider>
  )
}
