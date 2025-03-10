import { Navigate, Route, Routes } from "react-router-dom"
import { NavBarComponent } from "./components/NavBarComponent"
import { ProductsPage } from "./pages/ProductsPage"
import { ShopingCartPage } from "./pages/ShopingCartPage"
import { ProductProvider } from "./context/ProductProvider"
import { CartProvider } from "./context/CartProvider"

export const CarritoApp = () => {
    return (
        <ProductProvider>
            <CartProvider>
                <NavBarComponent />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ProductsPage></ProductsPage>}></Route>
                        <Route path="/carrito" element={<ShopingCartPage></ShopingCartPage>}></Route>
                        <Route path="/*" element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>
            </CartProvider>
        </ProductProvider>
    )
}
