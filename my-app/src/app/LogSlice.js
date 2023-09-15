import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logged: false,
  token: "",
};

export const logSlice = createSlice({
  name: "log",
  initialState,
  reducers: {
    logIn: (state) => {
      state.logged = true;
    },
    logOut: (state) => {
      state.logged = false;
      state.token = "";
    },
    editState: (state) => {
      state.isEdit = !state.isEdit;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = "";
    },
  },
});

export const { logIn, logOut, editState, setToken, clearToken } = logSlice.actions;

export default logSlice.reducer;
