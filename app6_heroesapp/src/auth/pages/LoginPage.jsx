import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

  const navigate = useNavigate(); // Nuevo hook

  const onLogin = () => { // Cuando pulso el botón de logout, me lleva al login
      navigate('/marvel'); //Navegar a la pantalla de login
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
