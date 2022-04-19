import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { setToStorage, removeFromStorage } from "../../utils/helpers";
import { signIn } from "../../utils/API";

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
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      if (payload.detail) return initialState;

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

export const { logout } = authedUserSlice.actions;
export default authedUserSlice.reducer;
