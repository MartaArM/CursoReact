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
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> */}
            {/* <span className="navbar-toggler-icon"></span> */}
            {/* </button> */}
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className={({isActive}) => {
                        let clase = (isActive == true) ? " active" : "";
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
