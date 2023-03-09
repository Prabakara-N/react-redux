import { createSlice } from "@reduxjs/toolkit";
import items from "../../data";

const initialState = {
  cartItems: items,
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increaseItem: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity += 1;
    },

    decreaseItem: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity -= 1;

      state.cartItems = state.cartItems.filter((item) => item.quantity > 0);
    },

    calculateTotals: (state) => {
      let price = 0;
      let quantity = 0;

      state.cartItems.forEach((item) => {
        quantity += item.quantity;
        price += item.quantity * item.price;
      });
      state.totalPrice = price.toFixed(2);
      state.totalQuantity = quantity;
    },
  },
});

export default cartSlice.reducer;
export const {
  clearCart,
  removeItem,
  increaseItem,
  decreaseItem,
  calculateTotals,
} = cartSlice.actions;
