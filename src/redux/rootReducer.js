import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import publicSlice from "./slices/publicSlice";

const rootReducer = combineReducers({
  counter: counterSlice,
  publicData: publicSlice,
});

export default rootReducer;
