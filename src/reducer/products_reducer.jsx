import {
    SIDEBAR_OPEN, SIDEBAR_CLOSE,
    GET_PRODUCTS_BEGIN, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCT_BEGIN, GET_SINGLE_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_ERROR,
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
        case GET_SINGLE_PRODUCT_BEGIN:
            return {
                ...state, singleProductLoading: true,
            }
        case GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state, singleProductLoading: false,
                singleProduct: action.payload
            }
        case GET_SINGLE_PRODUCT_ERROR:
            return {
                ...state, singleProductLoading: false,
                SingleProductError: true,
            }
        default:
            throw new Error(`Action ${action.type} is not matching`);
    }
}

export default reducer;
