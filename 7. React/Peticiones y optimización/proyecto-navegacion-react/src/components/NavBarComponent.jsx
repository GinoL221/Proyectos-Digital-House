import { NavLink } from "react-router-dom"

export const NavBarComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" href="#">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to='/' className="nav-link" >Home</NavLink>
                        <NavLink to='/about' className="nav-link" >About</NavLink>
                        <NavLink to='/contact' className="nav-link" >Contact</NavLink>
                        <NavLink to='/login' className="nav-link" >Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
