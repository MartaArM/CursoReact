import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    // <>
    //     <Link to="/">Home</Link> {/* Son links para ir a otros elementos de la página */}
    //     <Link to="login">Login</Link>
    //     <Link to="about">About</Link>
    // </>
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            {/* <Link className="navbar-brand" to="/">Home</Link> */}
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> */}
            {/* <span className="navbar-toggler-icon"></span> */}
            {/* </button> */}
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                </li>
                <li className="nav-item">
                    <Link  className="nav-link" to="login">Login</Link>
                {/* <a className="nav-link" href="#">Features</a> */}
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="about">About</Link>
                {/* <a className="nav-link" href="#">Pricing</a> */}
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}
