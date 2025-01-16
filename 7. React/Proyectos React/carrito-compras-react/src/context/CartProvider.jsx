import { useReducer } from 'react';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {

    initialState = [];

    const [shoppingList, dispatch] = useReducer(shoppingReducer, initialState);

    const addProduct = (product) => {
        const action = {
            type: '[CART] Add Product',
            payload: id
        }
        dispatch(action);
    }
    const removeProduct = (id) => {
        const action = {
            type: '[CART] Remove Product',
            payload: id
        }
        dispatch(action);
    }
    const incrementQuantity = (id) => {
        const action = {
            type: '[CART] Increment Quantity',
            payload: id
        }
        dispatch(action);
    }
    const decrementQuantity = (id) => {
        const action = {
            type: '[CART] Decrement Quantity',
            payload: id
        }
        dispatch(action);
    }

    const cartReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CART] Add Product':
                return [...state, action.payload];
            case '[CART] Remove Product':
                return state.filter((product) => product.id !== action.payload);
            case '[CART] Increment Quantity':

                break;
            case '[CART] Decrement Quantity':

                break;

            default:
                return state;
        }
    }

    return (
        <CartContext.Provider value={{ products }}>
            {children}
        </CartContext.Provider>
    )
}
