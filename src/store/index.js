// store.js

import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorSlice";

const store = configureStore({
  reducer: {
    color: colorReducer,
  },
});

export default store;
