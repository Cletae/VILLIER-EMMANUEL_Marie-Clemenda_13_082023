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
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = "";
    },
  },
});

export const { logIn, logOut, setToken, clearToken } = logSlice.actions;

export default logSlice.reducer;
