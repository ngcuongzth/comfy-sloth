import {
    createContext, useContext,
    useReducer, useEffect
} from "react";
import {
    ADD_TO_CART, REMOVE_CART_ITEM,
    TOGGLE_CART_ITEM_AMOUNT, CLEAR_CART, COUNT_CART_TOTALS
} from '../actions/action'
import reducer from "../reducer/cart_reducer";

const getDataFromLocalStorage = () => {
    let cart = localStorage.getItem("cart");
    if (cart) {
        return JSON.parse(localStorage.getItem("cart"));
    }
    else {
        return []
    }
}

const initialState = {
    cart: getDataFromLocalStorage(),
    totalItems: 0,
    totalAmount: 0,
    shipping_fee: 54,
}

const CartContext = createContext();
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
    }, [state.cart])
    // add to cart 
    const addToCart = (id, color, amount, product) => {
        dispatch({
            type: ADD_TO_CART,
            payload: {
                id, color, amount, product
            }
        })
    }

    // toogle amount 
    const toggleAmount = (idCart, act) => {
        dispatch({
            type: TOGGLE_CART_ITEM_AMOUNT,
            payload: {
                idCart, act
            }
        })
    }
    // remove item
    const removeItem = (id) => {
        dispatch({
            type: REMOVE_CART_ITEM,
            payload: id
        })
    }
    // clear cart
    const clearCart = () => {
        dispatch({
            type: CLEAR_CART,
        })
    }

    useEffect(() => {
        dispatch({
            type: COUNT_CART_TOTALS
        })
    }, [state.cart])
    return <CartContext.Provider value={{
        ...state, addToCart, clearCart, removeItem, toggleAmount
    }}>
        {children}
    </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
}

export default CartProvider;
export { useCartContext };