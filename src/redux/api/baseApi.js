import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setToken, removeToken } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const refreshToken = api.getState().auth.refreshToken;

    if (!refreshToken) {
      api.dispatch(removeToken());
      return result;
    }

    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/refresh-token`, {
      method: "POST",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    const data = await res.json();

    if (data?.data?.accessToken) {
      api.dispatch(setToken({ accessToken: data?.data?.accessToken }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(removeToken());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
  tagTypes: [
    "profile",
    "tool-categories",
    "files",
    "notifications",
    "referral-history",
    "withdraw-history",
    "balance",
    "payment-history",
  ],
});
