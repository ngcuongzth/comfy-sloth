import {
    SIDEBAR_OPEN, SIDEBAR_CLOSE,
    GET_PRODUCTS_BEGIN, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR
} from '../actions/action'

const reducer = (state, action) => {
    switch (action.type) {
        case SIDEBAR_OPEN:
            return {
                ...state, isSidebarOpen: true
            }
        case SIDEBAR_CLOSE:
            return {
                ...state, isSidebarOpen: false
            }
        case GET_PRODUCTS_BEGIN:
            return {
                ...state, productsLoading: true
            }
        case GET_PRODUCTS_SUCCESS:
            const featuredProducts = action.payload.filter(
                (product) => product.featured === true
            )
            return {
                ...state,
                productsLoading: false, productsError: false,
                products: action.payload, featuredProducts: featuredProducts

            }
        case GET_PRODUCTS_ERROR:
            return {
                ...state, productsLoading: false, productsError: true
            }
        default:
            throw new Error(`Action ${action.type} is not math`);
    }
}

export default reducer;

26