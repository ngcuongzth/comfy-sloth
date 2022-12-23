import { useContext, createContext, useReducer, useEffect } from "react";
import reducer from "../reducer/filters_reducer";
import { useProductsContext } from "./products_context";
import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, UPDATE_SORT, SORT_PRODUCTS, FILTER_PRODUCTS, UPDATE_FILTERS } from "../actions/action";
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
        category: "all",
        company: "all",
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
            type: SORT_PRODUCTS,
        })
        dispatch({
            type: FILTER_PRODUCTS
        })
    }, [state.sort, state.allProducts, state.filters, state.filters])

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

    const updateFilters = (e)=>{
        let name = e.target.name;
        let value = e.target.value
        if(name ==="category" || name ==="company"){
            value = e.target.textContent;
        }
        if(name ==='price'){
            value = Number(value)
        }
        if(name ==="shipping"){
            value = e.target.checked
        }
        dispatch({
            type: UPDATE_FILTERS,
            payload: {
                name, value
            }
        })
    }
    const clearFilters = () =>{

    }
    return <FilterContext.Provider value={{
        ...state, setGridView, setListView, updateSort, updateFilters
    }}>
        {children}
    </FilterContext.Provider>
}

export default FilterProvider

export const useFilterContext = () => {
    return useContext(FilterContext)
}
// 41