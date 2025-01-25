import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
    error: false,
  },
  // reducers: {
  //   setUser(state, action) {
  //     state.user = action.payload; // update data by taking user input data came from => dispatch function :- (LoginFrom.jsx)
  //   },
  // },
  reducers: {
    logoutUser(state) {
      state.user = null;
      localStorage.removeItem("authToken");
    },
  },
  extraReducers: (builder) => {
    // loading, success, failure
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        //action data came from => authaction.js
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        //action data came from => authaction.js
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

// export const { setUser } = authSlice.actions;
export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
