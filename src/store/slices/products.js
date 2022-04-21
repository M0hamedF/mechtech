import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { productsFormat } from "../../utils/helpers";
import { getProducts } from "../../utils/API";

export const getAll = createAsyncThunk(
  "products/getAll",
  async () => await getProducts()
);

const initialState = null;
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getAll.fulfilled]: (state, action) => productsFormat(action.payload),
  },
});

export default productsSlice.reducer;
