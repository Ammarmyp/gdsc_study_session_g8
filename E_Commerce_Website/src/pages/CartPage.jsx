import React from 'react'
import { useParams } from 'react-router-dom';
import items from '../data/items';

const CartPage = ({onAddToCart, onRemoveFromCart, cartItems}) => {
  const { cart } = useParams();
  // const cartItem = items.find((item) => item.id === parseInt(cart.id));

  

  return (
    <div>
        {}
    </div>
  )
}

export default CartPage