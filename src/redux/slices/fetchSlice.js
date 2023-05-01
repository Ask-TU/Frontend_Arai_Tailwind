import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    class: []
};

const fetchSlice = createSlice({
  name: "fetchSlice",
  initialState: initialValue,
  reducers: {
    setClass: (state, action) => {
      state.class = action.payload;
    },
    
  },
  extraReducers: (builder) => {},
});

export const { setClass } = fetchSlice.actions;
export default fetchSlice.reducer;
