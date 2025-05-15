import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (newUser) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: newUser,
      }),
    }),
    validateOTP: builder.mutation({
      query: (data) => ({
        url: "/auth/validate-otp",
        method: "POST",
        body: data,
      }),
    }),
    resendOTP: builder.mutation({
      query: (data) => ({
        url: "/auth/resend",
        method: "POST",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/profile/change-password",
        method: "POST",
        body: data,
      }),
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/profile/update",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["profile"],
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: credentials,
      }),
    }),
    profile: builder.query({
      query: () => ({
        url: "/profile",
        method: "GET",
      }),
      providesTags: ["profile"],
    }),
    terms: builder.query({
      query: () => ({
        url: "/legal/terms",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useProfileQuery,
  useValidateOTPMutation,
  useResendOTPMutation,
  useChangePasswordMutation,
  useUpdateProfileMutation,
  useTermsQuery,
} = authApi;
