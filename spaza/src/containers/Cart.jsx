import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Checkout from './Checkout'



const Cart = () => {
  const cart = useSelector(state => state.auth.cart);
  const [state, setState] = useState(false);
  var total = cart.reduce((accum, item) => accum + item.price, 0)

  var items = cart.map(item =>
    (<div key={item.id}>
      <label className="Item-name">{item.name}: R <strong>{item.price}</strong></label>
    </div>)
  )
  const toggleState = () => {
    setState(true);
  }

  return (<div className="Wrapper">
    {state == false ? <div>
      <header className="Wrapper-header">
        <h2>Total: <strong>R {total}</strong></h2>
      </header>
      <button onClick={toggleState}>Checkout</button>
      <div className="Items">
        <div className="Item">
          <p>{items}</p>
        </div>
      </div>
      <br />
    </div> : <Checkout />}
  </div>)
}


export default Cart;