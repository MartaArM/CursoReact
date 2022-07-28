import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Página de login
export const LoginPage = () => {

  const {login} = useContext(AuthContext);

  const navigate = useNavigate(); // Nuevo hook. Se utiliza para navegar entre páginas

  const onLogin = () => { // Cuando pulso el botón de login, me lleva a la página de marvel
    login( 'Marta Arenas');
    navigate('/marvel'); 
  }

  return (
    <div className="container mt-5">
      <h1 className="p-3 mb-2 h1_login rounded-3">Login</h1>
      <hr />

      <button 
      className="btn btn-lg btn-color"
      onClick={onLogin}
      >
        Login
      </button>

    </div>
  )
}
