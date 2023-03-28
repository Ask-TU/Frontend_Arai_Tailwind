import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  questions: {},
  loading: false,
  authState: false
};

const publicSlice = createSlice({
  name: "publicSlice",
  initialState: initialValue,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAuthState(state, action) {
      state.authState = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setQuestions, setLoading, setAuthState } = publicSlice.actions;
export default publicSlice.reducer;
