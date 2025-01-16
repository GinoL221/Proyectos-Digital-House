import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const ShopingCartPage = () => {

    const { shoppingList, removeProduct, incrementQuality, decrementQuantity } = useContext(CartContext);

    return (
        <>
            <h1>Tu carrito</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>

                <tbody>
                    {shoppingList.map((product) => (
                        <tr key={product.id}>
                            <th scope="row">{product.title}</th>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => removeProduct(product.id)}
                                >Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>

            <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button">Comprar</button>
            </div>

        </>
    )
}
