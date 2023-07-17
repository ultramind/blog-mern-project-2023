import { configureStore } from "@reduxjs/toolkit";
import { countReducers } from "./reducers/countReducers";

const store = configureStore({
  reducer: {
    count: countReducers,
  },
});

export default store;
