import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../redux/actions/actionTypes';
import Cart from './Cart';


const Shopping = () => {
  const [apples, setAppleValue] = useState({ name: "apples", id: 1, price: 22 });
  const [bananas, setBanana] = useState({ name: "bananas", id: 2, price: 18 });
  const [advocados, setAdvocados] = useState({ name: "advocados", id: 3, price: 28 });
  const [grapes, setGrapes] = useState({ name: "grapes", id: 4, price: 25 });
  const [lemons, setLemons] = useState({ name: "lemons", id: 5, price: 15 });
  const [toggleCart, setToggleCart] = useState({ state: false })
  const dispatch = useDispatch()

  const showCart = () => {
    setToggleCart({
      state: !toggleCart.state
    })
    console.log(toggleCart.state)
  }

  return (<div>

    <header>
      <h2 className="Online">TCG Online Shopping</h2>
      <button className="Cart-button" onClick={showCart}>Cart</button>
    </header>
    {toggleCart.state == false ?
      <div className="Products">
        <div className="Fruits">
          <h3>Fruits</h3>
          <div className="Apples">
            <img src="https://cdn.pixabay.com/photo/2018/08/02/21/51/red-3580560_960_720.jpg" alt="fresh apples" />
            <br />
            <label>R22 p/k</label>
            <button onClick={() => dispatch({ type: ADD_TO_CART, payload: apples })}>add to cart</button>
          </div>
          <div className="Bannas">
            <img src="https://cdn.pixabay.com/photo/2015/03/30/12/43/bananas-698608_960_720.jpg" alt="fresh bananas" />
            <br />
            <label>R18 p/k</label>
            <button onClick={() => dispatch({ type: ADD_TO_CART, payload: bananas })}>add to cart</button>
          </div>
          <div className="Advocados">
            <img src="https://cdn.pixabay.com/photo/2017/05/28/14/46/avocado-2351191_960_720.jpg" alt="fresh advocados" />
            <br />
            <label>R28 p/k</label>
            <button onClick={() => dispatch({ type: ADD_TO_CART, payload: advocados })}>add to cart</button>
          </div>
          <div className="Grapes">
            <img src="https://cdn.pixabay.com/photo/2019/09/22/12/37/grapes-4495944_960_720.jpg" alt="fresh grapes" />
            <br />
            <label>R25 p/k</label>
            <button onClick={() => dispatch({ type: ADD_TO_CART, payload: grapes })}>add to cart</button>
          </div>
          <div className="Lemons">
            <img src="https://cdn.pixabay.com/photo/2017/02/05/12/31/lemons-2039830_960_720.jpg" alt="fresh lemons" />
            <br />
            <label>R25 p/k</label>
            <button onClick={() => dispatch({ type: ADD_TO_CART, payload: grapes })}>add to cart</button>
          </div>
        </div>
        <div className="Drinks">
          <h3>Drinks</h3>
          <div className="Red-wine">
            <img src="https://cdn.pixabay.com/photo/2014/11/22/18/38/wine-541922_960_720.jpg" alt="Red Wine" />
            <br />
            <label>R75</label>
            <button>add to cart</button>
            <div className="Hennessy">
              <img src="https://cdn.shopify.com/s/files/1/0280/3079/5848/products/HennessyXOCognac750ml_500x.jpg?v=1588217622" alt="hennessy" />
              <br />
              <label>R2350</label>
              <button>add to cart</button>
            </div>
            <div className="White-walker">
              <img src="https://www.thespiritsbusiness.com/content/http://www.thespiritsbusiness.com/media/2018/10/White-Walker.jpg" alt="White walker whiskey" />
              <br />
              <label>R3000</label>
              <button>add to cart</button>
            </div>
            <div className="Three-ships">
              <img src="https://cdn.shopify.com/s/files/1/0987/1588/products/three-ships-9yo-fino-finish_600x600.jpg?v=1572250625" alt="Three ships whiskey" />
              <br />
              <label>R350</label>
              <button>add to cart</button>
            </div>
          </div>
        </div>
      </div>
      : <Cart />}
  </div>)
}


export default Shopping;