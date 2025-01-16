import { useState } from "react"
import "../styles/CardComponent.css"

export const CardComponent = ({ image, title, description, price }) => {

    const [added, setAdded] = useState(false);

    const addProduct = () => {
        setAdded(true);
    }

    const removeProduct = () => {
        setAdded(false);
    }

    return (
        <div className="card">

            <img src={image} alt={title} className="card-img" />

            <div className="">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                <p className="card-price">${price}</p>
                {
                    added
                        ? <button type="button" className="remove-button" onClick={removeProduct}>Eliminar</button>
                        : <button type="button" className="add-button" onClick={addProduct}>Agregar al carrito</button>
                }
            </div>

        </div>
    )
}
