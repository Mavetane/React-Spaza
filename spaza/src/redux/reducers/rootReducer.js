const { ADD_USER, ADD_TO_CART } = require("../actions/actionTypes")

const initialState = {
  users: [],
  cart: []
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      const newState = { users: [...state.users, action.payload] }
      return newState
    }
    case ADD_TO_CART: {
      const newItem = { cart: [...state.cart, action.payload] }
      return newItem;
    }
    default: {
      return state
    }
  }
}

export default rootReducer;