import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  questions: {},
  loading: false,
  authState: false,
  token: ''
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
    setToken(state, action) {
      state.token = action.payload;
    }
  },
  extraReducers: (builder) => {},
});

export const { setQuestions, setLoading, setAuthState, setToken } = publicSlice.actions;
export default publicSlice.reducer;
