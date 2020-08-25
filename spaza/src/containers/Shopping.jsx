import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../redux/actions/actionTypes';
import Cart from './Cart';


const Shopping = () => {
  const [Apples, setAppleValue] = useState({ name: "Apples", id: 1, price: 22 });
  const [Bananas, setBanana] = useState({ name: "Bananas", id: 2, price: 18 });
  const [Advocados, setAdvocados] = useState({ name: "Advocados", id: 3, price: 28 });
  const [Grapes, setGrapes] = useState({ name: "Grapes", id: 4, price: 25 });
  const [Lemons, setLemons] = useState({ name: "Lemons", id: 5, price: 15 });
  const [RedWine, setRedWine] = useState({ name: "Red-wine", id: 6, price: 75 });
  const [Hennessy, setHennessy] = useState({ name: "Hennessy", id: 7, price: 2350 });
  const [WhiteWalker, setWhiteWalker] = useState({ name: "White-walker", id: 8, price: 3000 });
  const [ThreeShips, setThreeShips] = useState({ name: "Three-ships", id: 9, price: 350 })
  const [StrawBerries, setStrawberries] = useState({ name: "Strawberries", id: 10, price: 32 })
  const [toggleCart, setToggleCart] = useState({ state: false })
  const dispatch = useDispatch()
  const count = useSelector(state => state.auth.count)


  const showCart = () => {
    setToggleCart({
      state: !toggleCart.state
    })
  }

  return (<div>

    <header className="Shop-header">
      <i class="fas fa-shopping-cart" onClick={showCart}>{count}</i>
    </header>
    {toggleCart.state == false ?
      <div className="Products">
        <h3>Fruits</h3>
        <div className="Fruits">
          <div className="Apples">
            <img src="https://cdn.pixabay.com/photo/2018/08/02/21/51/red-3580560_960_720.jpg" alt="fresh apples" />
            <br />
            <i class="fas fa-shopping-cart" onClick={() => dispatch({ type: ADD_TO_CART, payload: Apples })}>Add to cart</i>
            <br />
            <p>Eat apples on days ending with "Y"</p>
            <label>Only: <strong>R22 per/kg</strong></label>
          </div>
          <div className="Strawberries">
            <img src="https://media.istockphoto.com/photos/fresh-strawberries-background-picture-id477834644" alt="fresh strawberries" />
            <br />
            <i class="fas fa-shopping-cart" onClick={() => dispatch({ type: ADD_TO_CART, payload: StrawBerries })}>Add to cart</i>
            <br />
            <p>Assorted strawberries at an affordable price</p>

            <label>Only: <strong>R32 per/kg</strong></label>
          </div>
          <div className="Bannas">
            <img src="https://cdn.pixabay.com/photo/2015/03/30/12/43/bananas-698608_960_720.jpg" alt="fresh bananas" />
            <br />
            <i class="fas fa-shopping-cart" onClick={() => dispatch({ type: ADD_TO_CART, payload: Bananas })}>Add to cart</i>
            <br />
            <p>Harvested from the tropic regions of our country.</p>

            <label>Only: <strong>R18 per/kg</strong></label>
          </div>
          <div className="Advocados">
            <img src="https://cdn.pixabay.com/photo/2017/05/28/14/46/avocado-2351191_960_720.jpg" alt="fresh advocados" />
            <br />
            <i class="fas fa-shopping-cart" onClick={() => dispatch({ type: ADD_TO_CART, payload: Advocados })}>Add to cart</i>
            <br />
            <p>Freshly home grown advocados at an affordable price</p>

            <label>Only: <strong>R28 per/kg</strong></label>
          </div>
          <div className="Grapes">
            <img src="https://cdn.pixabay.com/photo/2019/09/22/12/37/grapes-4495944_960_720.jpg" alt="fresh grapes" />
            <br />
            <i class="fas fa-shopping-cart" onClick={() => dispatch({ type: ADD_TO_CART, payload: Grapes })}>Add to cart</i>
            <br />
            <p>Nothing can beat our juicy table grapes.</p>
            <label>Only: <strong>R25 per/kg</strong></label>
          </div>
          <div className="Lemons">
            <img src="https://cdn.pixabay.com/photo/2017/02/05/12/31/lemons-2039830_960_720.jpg" alt="fresh lemons" />
            <br />
            <i class="fas fa-shopping-cart" onClick={() => dispatch({ type: ADD_TO_CART, payload: Lemons })}>Add to cart</i>
            <br />
            <p>Lets fight covid19 with alkaline water from our home grown lemons.</p>
            <label>Only: <strong>R25 per/kg</strong></label>
          </div>
        </div>
        <h3>Drinks</h3>
        <div className="Drinks">
          <div className="Red-wine">
            <img src="https://cdn.pixabay.com/photo/2014/11/22/18/38/wine-541922_960_720.jpg" alt="Red Wine" />
            <br />
            <i class="fas fa-shopping-cart" onClick={() => dispatch({ type: ADD_TO_CART, payload: RedWine })}>Add to cart</i>
            <br />
            <p>Kleinboet (Bordeaux-blend)</p>
            <label><strong>R75</strong></label>
          </div>
          <div className="Hennessy">
            <img src="https://cdn.shopify.com/s/files/1/0280/3079/5848/products/HennessyXOCognac750ml_500x.jpg?v=1588217622" alt="hennessy" />
            <br />
            <i class="fas fa-shopping-cart" onClick={() => dispatch({ type: ADD_TO_CART, payload: Hennessy })}>Add to cart</i>
            <br />
            <p>HENNESSY XO</p>
            <label><strong>R2350</strong></label>
          </div>
          <div className="White-walker">
            <img src="https://www.thespiritsbusiness.com/content/http://www.thespiritsbusiness.com/media/2018/10/White-Walker.jpg" alt="White walker whiskey" />
            <br />
            <i class="fas fa-shopping-cart" onClick={() => dispatch({ type: ADD_TO_CART, payload: WhiteWalker })}>Add to cart</i>
            <br />
            <p>Game of Thrones Johnnie Walker White Walker Limited Edition Scotch Whisky, 70cl</p>
            <label><strong>R3000</strong></label>
          </div>
          <div className="Three-ships">
            <img src="https://cdn.shopify.com/s/files/1/0987/1588/products/three-ships-9yo-fino-finish_600x600.jpg?v=1572250625" alt="Three ships whiskey" />
            <br />
            <i class="fas fa-shopping-cart" onClick={() => dispatch({ type: ADD_TO_CART, payload: ThreeShips })}>Add to cart</i>
            <br />
            <p>Premium blended and single malt South African whisky, made exceptional, made here.</p>
            <label><strong>R350</strong></label>
          </div>
        </div>
      </div>
      : <Cart />}
  </div>)
}


export default Shopping;