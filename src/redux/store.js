import { configureStore } from "@reduxjs/toolkit";
import rqmReducer from "./random_q_machine/index.js";

export const store = configureStore({
  reducer: {
    rqm: rqmReducer
  },
})