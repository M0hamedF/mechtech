import { configureStore } from "@reduxjs/toolkit";

import authedUserReducer from "./slices/authedUser";
import productsReducer from "./slices/products";
import cartReducer from "./slices/cart";

const store = configureStore({
  reducer: {
    authedUser: authedUserReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;
