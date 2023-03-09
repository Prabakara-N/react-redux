// consists of few libraries

// redux (core library,state management)
// immer (allowes to mutate state)
// redux-thunk (handles async actions)
// reselect (simplifies reducer functions)
// redux developer tool

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import modalSlice from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalSlice,
  },
});
