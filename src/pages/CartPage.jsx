import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
import PageHero from '../components/PageHero'
import CartContent from '../components/Layouts/Cart/CartContent'

const CartPage = () => {
    const { cart } = useCartContext()
    if (cart.length < 1) {
        return (
            <Wrapper className='page-100'>
                <div className='empty'>
                    <h2>Your cart is empty</h2>
                    <Link to='/products' className='btn'>
                        fill it
                    </Link>
                </div>
            </Wrapper>
        )
    }
    return (
        <main>
            <PageHero title='cart' />
            <Wrapper className='page'>
                <CartContent />
            </Wrapper>
        </main>
    )
}

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage