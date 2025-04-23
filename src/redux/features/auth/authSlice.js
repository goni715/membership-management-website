import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      if (payload?.refreshToken) {
        state.refreshToken = payload.refreshToken;
      }
    },
    removeToken: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { setToken, removeToken } = authSlice.actions;

export default authSlice.reducer;

export const currentAccessToken = (state) => state.auth.accessToken;
export const currentRefreshToken = (state) => state.auth.refreshToken;
