import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate(); // Nuevo hook

    const onLogout = () => { // Cuando pulso el botón de logout, me lleva al login
        navigate('/login', {
            replace: true
        }); //Navegar a la pantalla de login
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light p-2 ">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => {
                            let clase = (isActive == true) ? " active" : ""; // Si es la página en la que nos encontramos, que la muestre activa.
                            return "nav-item nav-link" + clase;
                        }}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => {
                            let clase = (isActive == true) ? " active" : ""; 
                            return "nav-item nav-link" + clase;
                        }} 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => {
                            let clase = (isActive == true) ? " active" : ""; 
                            return "nav-item nav-link" + clase;
                        }} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            {/* Logout */}
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end ">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        Marta
                    </span>
                    <button 
                    className='nav-item nav-link btn'
                    onClick={onLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}