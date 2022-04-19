import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../utils/API";

export const getAll = createAsyncThunk("products/getAll", async (thunkAPI) => {
  const res = await getProducts();
  return res;
});

const initialState = {
  entities: {},
  loading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getAll.pending]: (state) => {
      state.loading = true;
    },
    [getAll.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = action.payload;
    },
    [getAll.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default productsSlice.reducer;
