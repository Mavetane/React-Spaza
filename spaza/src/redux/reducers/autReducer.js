import { AUTH_SAVE_USER, CHANGE_AUTHORIZATION, LOGOUT_USER, AUTH_ERROR, ADD_TO_CART } from '../actions/actionTypes';


const initialState = {
  count: null,
  cart: [],
  users: null,
  isAuthorized: false,
  error: { error: null }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      {
        const newState = { ...state, cart: [...state.cart, action.payload], count: state.count + 1 }
        console.log("state", newState)
        return newState
      };
    case AUTH_SAVE_USER:
      return { ...state, users: action.payload };
    case CHANGE_AUTHORIZATION:
      return { ...state, isAuthorized: action.payload }
    case LOGOUT_USER:
      return { ...state, users: null }
    case AUTH_ERROR:
      return { ...state, error: action.payload }
    default:
      return state;
  }
};

export default authReducer;