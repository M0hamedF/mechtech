import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => void state.push(action.payload),
    remove: (state, action) => void state.splice(action.payload, 1),
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
