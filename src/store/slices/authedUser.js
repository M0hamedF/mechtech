import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { signIn } from "../../utils/API";
import {
  userFormat,
  setToStorage,
  getFromStorage,
  removeFromStorage,
} from "../../utils/helpers";

export const login = createAsyncThunk(
  "authedUser/login",
  async ({ username, password }) => await signIn(username, password)
);

const initialState = null;
const authedUserSlice = createSlice({
  name: "authedUser",
  initialState,
  reducers: {
    logout: (state) => {
      removeFromStorage();
      return initialState;
    },
    checkLogin: (state) => getFromStorage() && getFromStorage(),
    update: (state, { payload }) => {
      setToStorage(payload);
      return payload;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      if (payload.detail) return initialState;

      const data = userFormat(payload);

      setToStorage(data);
      return data;
    },
  },
});

export const { checkLogin, logout, update } = authedUserSlice.actions;
export default authedUserSlice.reducer;
