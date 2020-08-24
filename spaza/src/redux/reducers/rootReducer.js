const { ADD_USER, ADD_TO_CART } = require("../actions/actionTypes")

const initialState = {
  carts: [],
  users: []
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      const newState = { ...state, users: [...state.users, action.payload] }
      return newState
    case ADD_TO_CART:
      console.log("state.cart", state)
      const newItem = { ...state, carts: [...state.carts, action.payload] }
      return newItem;
    default:
      return state
  }
}

export default rootReducer;