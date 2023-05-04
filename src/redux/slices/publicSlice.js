import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  questions: {},
  loading: false,
  authState: false,
  token: "",
  data: null,
  searchResult: {},
  search: "",
  classID: ""
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
    },
    setData(state, action) {
      state.data = action.payload;
    },
    setClasses(state, action) {
      state.classes = action.payload;
    },
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setClassID: (state, action) => {
      state.classID = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setQuestions, setLoading, setAuthState, setToken, setData, setSearchResult, setSearch, setClassID } =
  publicSlice.actions;
export default publicSlice.reducer;
