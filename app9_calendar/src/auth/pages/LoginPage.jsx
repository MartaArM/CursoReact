import { useAuthStore } from '../../hooks/useAuthStore';
import { useForm } from '../../hooks/useForm';
import './LoginPage.css';

const loginForm = {
    loginEmail: '',
    loginPassword: ''
}

const registerForm = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPasswordCheck: ''
}

export const LoginPage = () => {

    const {formState:onLoginFormState, onInputChange:onLoginInputChange} = useForm(loginForm);
    const {loginEmail, loginPassword} = onLoginFormState;

    const {startLogin} = useAuthStore();

    const loginSubmit = (event) => {
        event.preventDefault();
        // console.log({loginEmail, loginPassword});
        startLogin({email:loginEmail, password:loginPassword});
    }

    const {formState:onRegisterFormState, onInputChange:onRegisterInputChange} = useForm(registerForm);
    const {registerName, registerEmail, registerPassword, registerPasswordCheck} = onRegisterFormState;
    

    const registerSubmit = (event) => {
        event.preventDefault();
        console.log({registerName, registerEmail, registerPassword, registerPasswordCheck});
    }

    

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Iniciar sesión</h3>
                    <form onSubmit={loginSubmit}>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="loginEmail"
                                onChange={onLoginInputChange}
                                value={loginEmail}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="loginPassword"
                                onChange={onLoginInputChange}
                                value={loginPassword}
                            />
                        </div>
                        {/* <div className="form-group mb-2"> */}
                        <div className="d-flex justify-content-center">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={registerSubmit}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="registerName"
                                onChange={onRegisterInputChange}
                                value={registerName}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="registerEmail"
                                onChange={onRegisterInputChange}
                                value={registerEmail}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="registerPassword"
                                onChange={onRegisterInputChange}
                                value={registerPassword}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name="registerPasswordCheck"
                                onChange={onRegisterInputChange}
                                value={registerPasswordCheck}
                            />
                        </div>

                        <div className="d-flex justify-content-center">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}