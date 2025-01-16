import { Navigate, Route, Routes } from "react-router-dom"
import { NavBarComponent } from "./components/NavBarComponent"
import { ProductPage } from "./pages/ProductPage"
import { ShopingCartPage } from "./pages/ShopingCartPage"
import { ProductProvider } from "./context/ProductProvider"

export const CarritoApp = () => {
    return (
        <ProductProvider>
            <NavBarComponent />
            <div className="container">
                <Routes>
                    <Route path="/" element={<ProductPage></ProductPage>}></Route>
                    <Route path="/carrito" element={<ShopingCartPage></ShopingCartPage>}></Route>
                    <Route path="/*" element={<Navigate to='/' />}></Route>
                </Routes>
            </div>
        </ProductProvider>
    )
}
