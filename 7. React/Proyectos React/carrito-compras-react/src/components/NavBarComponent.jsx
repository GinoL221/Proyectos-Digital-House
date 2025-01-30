import { Badge } from "@mui/material"
import { ShoppingCart } from '@mui/icons-material'
import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import '../styles/NavBarComponent.css'

export const NavBarComponent = () => {

    const { shoppingList } = useContext(CartContext);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand" href="#">HiperCompras</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <NavLink to='/' className="nav-link" aria-current="page" href="#">Productos</NavLink>
                    </div>
                    <div className="navbar-nav">
                        <NavLink to='/carrito' className="nav-link" aria-current="page" href="#">Carrito</NavLink>
                    </div>
                </div>
                <NavLink to='/carrito' className="cart-icon btn btn-outline-primary">
                    <Badge badgeContent={shoppingList.length} color="primary">
                        <ShoppingCart />
                    </Badge>
                </NavLink>
            </div>
        </nav>
    )
}
