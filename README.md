const { totalItems, totalAmount } = state.cart.reduce(
(total, cartItem) => {
const { amount, price } = cartItem

                    total.totalItems += amount
                    total.totalAmount += price * amount
                    return total
                },
                {
                    totalItems: 0,
                    totalAmount: 0,
                }
            )
            return { ...state, totalItems, totalAmount }
