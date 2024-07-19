import { useContext, useReducer } from "react";

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};
const INITIAL_STATE = {
  currentUser: null,
};
const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error(`unhandled error ${type} in userReducer`);
  }
};

const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

export const setCurrentUser = (user) => {
  dispatch(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

// ***************************************************************************************
//  CART REDUCER
import { createAction } from "../utils/reducer/reducer.utils";

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const INITIAL_CART_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`unhandled error ${type} in cartReducer`);
  }
};

// in cart provider

// const [{isCartOpen,cartItems,cartCount,cartTotal},dispatch]=useReducer(cartReducer,INITIAL_CART_STATE)

//reduc-logger
// redux-persist reselect
