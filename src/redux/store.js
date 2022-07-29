import { configureStore } from "@reduxjs/toolkit";
import rqmReducer from "./random_q_machine/";
import mpReducer from "./markdown_previewer/";

export const store = configureStore({
  reducer: {
    rqm: rqmReducer,
    mp: mpReducer
  },
})