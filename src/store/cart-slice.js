import { createSlice } from "@reduxjs/toolkit";

const cartSlicer = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    cartTotalPRice: 10,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      state.cartTotalPRice =
        action.payload.cartTotalPRice + state.cartTotalPRice;
    },
    addItem(state, action) {
      const newItem = action.payload;
      state.totalQuantity++;
      state.changed = true;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.cartTotalPRice = state.cartTotalPRice + newItem.price;
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price + existingItem.totalPrice;
        state.cartTotalPRice = state.cartTotalPRice + newItem.price;
      }
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.cartTotalPRice = state.cartTotalPRice - existingItem.price;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlicer.actions;

export default cartSlicer;
//we get new item in the action object and in that object the payloa dprovides us with the value
//for new item we check if it is in existing items or not
//upon not finding it we push it to the state of items list
//if the item exists we add no of q and total price
