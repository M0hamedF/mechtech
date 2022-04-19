import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { signIn } from "../../utils/API";
import {
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
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      if (payload.detail) return initialState;

      console.log(payload);

      const data = {
        name: payload.name,
        username: payload.nick_name,
        img: payload.img,
        email: payload.email,
        phone: payload.phone,
      };

      setToStorage(data);
      return data;
    },
  },
});

export const { checkLogin, logout } = authedUserSlice.actions;
export default authedUserSlice.reducer;
