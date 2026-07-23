import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import cartReducer from "../utils/cartSlice.jsx";

// Redux store configuration
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
