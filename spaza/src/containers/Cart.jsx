import React from 'react';
import { useSelector, useDispatch } from 'react-redux';



const Cart = () => {
  const cart = useSelector(state => state.auth.cart)
  var total = cart.reduce((accum, item) => accum + item.price, 0)

  var items = cart.map(item =>
    (<div key={item.id}>
      <label className="Item-name">{item.name}: R <strong>{item.price}</strong></label>
    </div>)
  )


  return (<div className="Items">
    <h2>Total: <strong>R {total}</strong></h2>
    <div className="Item">
      <p>{items}</p>
    </div>
  </div>)
}


export default Cart;