import React from 'react';
import { useSelector } from 'react-redux';


const Checkout = () => {
  const cart = useSelector(state => state.auth.cart)
  var total = cart.reduce((accum, item) => accum + item.price, 0)
  return <div className="Checkout">
    <i class="fas fa-check-circle"></i>
    <h4>Thank you for shopping with us</h4>
    <p>Your order has been successfully placed With a total of <strong>R {total}</strong>.<br /> We will be in contact via email soon!
    Please remember to refresh your shopping page to clear the cart.<br />
    Call again... :)
    </p>
  </div>;
}


export default Checkout;