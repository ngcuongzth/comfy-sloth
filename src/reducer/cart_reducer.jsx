import {
    ADD_TO_CART, REMOVE_CART_ITEM,
    TOGGLE_CART_ITEM_AMOUNT, CLEAR_CART,
    COUNT_CART_TOTALS
} from '../actions/action'

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const { id, color, amount, product } = action.payload;

            const isInclude = state.cart.find((prod) => {
                // kiểm tra xem có mặt hàng này trong giỏ chưa
                // cùng mã màu + mã sản phẩm
                return prod.id === id + color;
            })
            // đã có mặt hàng này trong giỏ
            // cùng mã sản phẩm + mã màu
            if (isInclude) {
                const tempProduct = state.cart.map((prod) => {
                    if (prod.id === id + color) {
                        let newAmount = prod.amount + amount;
                        if (newAmount > prod.stock) {
                            newAmount = prod.stock
                        }
                        return {
                            ...prod, amount: newAmount
                        }
                    }
                    else {
                        return prod
                    }
                })
                return {
                    ...state, cart: tempProduct
                }
            }
            // nếu chưa có thì thực hiện thêm
            else {
                const newProduct = {
                    id: id + color,
                    name: product.name,
                    color,
                    amount,
                    image: product.images[0].url,
                    price: product.price,
                    stock: product.stock
                }
                return { ...state, cart: [...state.cart, newProduct] }
            }


        case REMOVE_CART_ITEM:
            const newCart = state.cart.filter((prod) => {
                if (prod.id === action.payload) {
                    return false;
                }
                else {
                    return true;
                }
            })
            return {
                ...state, cart: newCart
            }
        case TOGGLE_CART_ITEM_AMOUNT:
            const { idCart, act } = action.payload;
            const tempCart = state.cart.map((prod) => {
                if (prod.id === idCart) {
                    if (act === "increase") {
                        let newAmount = prod.amount + 1;
                        if (newAmount > prod.stock) {
                            newAmount = prod.stock
                        }
                        return { ...prod, amount: newAmount }
                    }
                    if (act === "decrease") {
                        let newAmount = prod.amount - 1;
                        if (newAmount < 1) {
                            newAmount = 1;
                        }
                        return { ...prod, amount: newAmount }
                    }
                }
                else {
                    return prod
                }
            })
            return {
                ...state, cart: tempCart
            }
        case CLEAR_CART:
            return {
                ...state, cart: []
            }
        case COUNT_CART_TOTALS:
            const { totalItems, totalAmount } =
                state.cart.reduce((total, item) => {
                    const { amount, price } = item;
                    // đếm xem có bao nhiêu sản phẩm trong giỏ hàng
                    total.totalItems += amount;
                    // tổng giá trị của đơn hàng
                    total.totalAmount += amount * price;
                    return total
                }, {
                    totalItems: 0,
                    totalAmount: 0
                })
            return {
                ...state, totalItems, totalAmount
            }

        // 5 products 
        // 
        default:
            throw new Error(`Action ${action.type} is not matching`)
    }
}

export default reducer;
