import { createSlice } from "@reduxjs/toolkit";
// import { CART_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

// ***********helper functions*************************************************************
export const addCartItem = (cartItems, productToAdd) => {
  // find if cartIetms contains the productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // if found , increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //  return new array with modified cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
// ********************************************************************
export const decrementItem = (cartItems, productToRemove) => {
  // find if cartIetms contains the productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  //  if found and quantity egual 1 return all items exept this item.id
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  // if found , decrement quantity
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
// ************************************************************************
export const clearCartItem = (cartItems, cartItemToRemove) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
// ************************************************************************

// create actions using redux - toolkit
export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    DecrementItemFromCart(state, action) {
      state.cartItems = decrementItem(state.cartItems, action.payload);
    },
    removeItemFromCart(state, action) {
      state.cartItems = clearCartItem(state.cartItems, action.payload);
    },
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
  },
});

export const {
  addItemToCart,
  DecrementItemFromCart,
  removeItemFromCart,
  setIsCartOpen,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

// create actions using redux
// export const cartReducerold = (state = CART_INITIAL_STATE, action = {}) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         cartItems: payload,
//       };
//     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen: payload,
//       };
//     default:
//       return state;
//   }
// };
