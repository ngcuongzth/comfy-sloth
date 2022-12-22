import axios from "axios"
import { useContext, useEffect, useReducer, createContext } from 'react'
import reducer from "../reducer/products_reducer"
import { products_url as url } from '../api/api'
import {
    SIDEBAR_OPEN, SIDEBAR_CLOSE,
    GET_PRODUCTS_BEGIN, GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS
} from "../actions/action"
const initialState = {
    isSidebarOpen: false,
    productsLoading: false,
    productsError: false,
    products: [],
    featuredProducts: [],
}

// create context 
const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const closeSidebar = () => {
        dispatch({
            type: SIDEBAR_CLOSE
        })
    }
    const openSidebar = () => {
        dispatch({
            type: SIDEBAR_OPEN
        })
    }

    const getProducts = async () => {
        dispatch({
            type: GET_PRODUCTS_BEGIN
        })
        const resp = await axios.get(url);
        const data = resp.data;
        try {
            dispatch({
                type: GET_PRODUCTS_SUCCESS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: GET_PRODUCTS_ERROR
            })
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    return <ProductsContext.Provider value={{
        ...state, closeSidebar, openSidebar
    }}>
        {children}
    </ProductsContext.Provider>
}

export default ProductsProvider;

export const useProductsContext = () => {
    return useContext(ProductsContext)
}