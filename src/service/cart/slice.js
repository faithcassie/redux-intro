import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [
      { id: "p1", title: "Product 1", price: 0, qty: 0 },
      { id: "p2", title: "Product 2", price: 0, qty: 0 },
    ],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      state.products.forEach((cartProduct) => {
        if (cartProduct.id === newProduct.id) {
          cartProduct.qty += 1;
          cartProduct.price += newProduct.price;
        }
      });
      state.totalPrice += newProduct.price;
    },
    removeCart: (state, action) => {
      const removedProduct = action.payload;
      state.products.forEach((cartProduct) => {
        if (cartProduct.id === removedProduct.id && cartProduct.qty > 0) {
          cartProduct.qty -= 1;
          cartProduct.price -= removedProduct.price;
          state.totalPrice -= removedProduct.price;
        }
      });
    },
  },
});
const { actions, reducers } = cartSlice;
export const { addToCart, removeCart } = actions;
// export default reducers
