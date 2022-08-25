import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;

//createSlice:creates a slicer
//toggle state ma you have previous state
//uiActions ma you have reducers
//reducers can take * actions
//all the state mutation is performed by imer library of react
