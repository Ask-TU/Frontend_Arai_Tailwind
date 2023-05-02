import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import publicSlice from "./slices/publicSlice";
import fetchSlice from "./slices/fetchSlice";

const rootReducer = combineReducers({
  counter: counterSlice,
  publicData: publicSlice,
  fetchData: fetchSlice,
});

export default rootReducer;
