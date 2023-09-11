import { configureStore } from "@reduxjs/toolkit";
import logReducer from "./LogSlice";

export const store = configureStore({
  reducer: {
    log: logReducer,
  },
});
