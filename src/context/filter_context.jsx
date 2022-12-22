import { useContext, createContext, useReducer, useEffect } from "react";
import reducer from "../reducer/filters_reducer";
import { useProductsContext } from "./products_context";
import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, UPDATE_SORT, SORT_PRODUCTS } from "../actions/action";
const FilterContext = createContext()
const initialState = {
    isLoading: [],
    isError: [],
    allProducts: [],
    filteredProducts: [],
    gridView: true,
    sort: "price-lowest",
    filters: {
        text: '',
        company: "all",
        category: "all",
        color: "all",
        minPrice: 0,
        maxPrice: 0,
        price: 0,
        shipping: false,
    }
}
const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { products } = useProductsContext();

    useEffect(() => {
        dispatch({
            type: LOAD_PRODUCTS, payload: products,
        })
    }, [products])

    useEffect(() => {
        dispatch({
            type: SORT_PRODUCTS
        })
    }, [state.sort, state.allProducts, state.filters])

    const setGridView = () => {
        dispatch({
            type: SET_GRIDVIEW
        })
    }
    const setListView = () => {
        dispatch({
            type: SET_LISTVIEW
        })
    }
    const updateSort = (e) => {
        dispatch({
            type: UPDATE_SORT,
            payload: e.target.value
        })
    }
    return <FilterContext.Provider value={{
        ...state, setGridView, setListView, updateSort
    }}>
        {children}
    </FilterContext.Provider>
}

export default FilterProvider

export const useFilterContext = () => {
    return useContext(FilterContext)
}
// 41