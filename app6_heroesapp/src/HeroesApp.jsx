import { AuthProvider } from "./auth/context/AuthProvider"
import { Navbar } from "./heroes/components/NavBar"
import { AppRouter } from "./router/AppRouter"

export const HeroesApp = () => {
    return (
        <AuthProvider>
            <AppRouter/>
        </AuthProvider>
    )
}
