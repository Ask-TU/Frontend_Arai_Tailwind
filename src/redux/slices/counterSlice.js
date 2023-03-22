import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  count: 0,
  loading: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialValue,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
    },

    decrement: (state, action) => {
      state.count = state.count - 1;
    },
  },
  extraReducers: (builder) => {},
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
