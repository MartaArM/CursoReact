import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    // <>
    //     <Link to="/">Home</Link> {/* Son links para ir a otros elementos de la página */}
    //     <Link to="login">Login</Link>
    //     <Link to="about">About</Link>
    // </>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">useContext</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className={({isActive}) => {
                        let clase = (isActive == true) ? " active" : ""; // Si es la página en la que nos encontramos, que la muestre activa.
                        return "nav-link" + clase;
                    }} 
                    to="login"> Login </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={({isActive}) => {
                        let clase = (isActive == true) ? " active" : "";
                        return "nav-link" + clase;
                    }} 
                    to="about"> About </NavLink>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}
