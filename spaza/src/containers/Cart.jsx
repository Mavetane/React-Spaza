import React from 'react';
import { useSelector, useDispatch } from 'react-redux';



const Cart = () => {
  const cart = useSelector(state => state.cart)
  console.log("cart", cart);
  return (<div className="Items">
    <h1>Cart</h1>
    {cart.map(item =>
      <div className="Item" key={item.id}>
        <label className="Item-name">{item.name}</label><br />
        <label> R{item.price}</label>
      </div>
    )}
  </div>)
}


export default Cart;