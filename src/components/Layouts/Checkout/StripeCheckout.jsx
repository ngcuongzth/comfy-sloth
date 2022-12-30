// const cardStyle = {
//     style: {
//       base: {
//         color: '#32325d',
//         fontFamily: 'Arial, sans-serif',
//         fontSmoothing: 'antialiased',
//         fontSize: '16px',
//         '::placeholder': {
//           color: '#32325d',
//         },
//       },
//       invalid: {
//         color: '#fa755a',
//         iconColor: '#fa755a',
//       },
//     },
//   };
import { loadStripe } from '@stripe/stripe-js'
import styled from 'styled-components/macro'
import {
  CardElement, useStripe, Elements, useElements
} from "@stripe/react-stripe-js";
import axios from 'axios';
import { useCartContext } from '../../../context/cart_context';
import { useUserContext } from '../../../context/user_context';
import { formatPrice } from '../../../utils/helpers';
import { Navigate } from 'react-router-dom';


const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const CheckoutForm = () =>{
  return <h2>Hello from stripe checkout</h2>
}

const StripeCheckout = () => {
  return (
    <Wrapper>
      <Elements  stripe={promise}>
        <CheckoutForm/>
      </Elements>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  
`
export default StripeCheckout