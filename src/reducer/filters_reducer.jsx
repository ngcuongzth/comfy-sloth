
import {
    SET_GRIDVIEW, SET_LISTVIEW,
    UPDATE_SORT, UPDATE_FILTERS,
    SORT_PRODUCTS, FILTER_PRODUCTS,
    CLEAR_FILTERS, LOAD_PRODUCTS
} from "../actions/action";

const reducer = (state, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            const priceArr = action.payload.map((product) => {
                return product.price
            })
            const maxPrice = Math.max(...priceArr);
            return {
                ...state,
                allProducts: [...action.payload],
                filteredProducts: [...action.payload],
                filters: {
                    ...state.filters,
                    maxPrice: maxPrice,
                    price: maxPrice,
                }
            }

        case SET_GRIDVIEW:
            return {
                ...state, gridView: true,
            }
        case SET_LISTVIEW:
            return {
                ...state, gridView: false
            }
        case UPDATE_SORT:
            return {
                ...state, sort: action.payload
            }
        case SORT_PRODUCTS:
            let tempProducts = [...state.filteredProducts]
            if (state.sort === "price-lowest") {
                tempProducts = tempProducts.sort((a, b) => {
                    if (a.price < b.price) {
                        return -1
                    }
                    if (a.price > b.price) {
                        return 1
                    }
                    return 0
                })
            }
            if (state.sort === "price-highest") {
                tempProducts = tempProducts.sort((a, b) => {
                    return b.price - a.price;
                })
            }
            if (state.sort === "name-a") {
                tempProducts = tempProducts.sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
            }
            if (state.sort === "name-z") {
                tempProducts = tempProducts.sort((a, b) => {
                    return b.name.localeCompare(a.name)
                })
            }
            return {
                ...state, filteredProducts: tempProducts
            }
        case UPDATE_FILTERS:
            return {
                ...state, filters : {...state.filters, 
                [action.payload.name] : action.payload.value
                }
            }
           
        case FILTER_PRODUCTS:
            return {
                ...state, 
            }
        default:
            throw new Error(`Action ${action.type} is not matching`);
    }
}

export default reducer
