import { baseApi } from "@/redux/api/baseApi";

const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNotifications: builder.query({
      query: (params) => {
        const searchParams = new URLSearchParams(params).toString();

        return {
          url: `/notifications?${searchParams}`,
          method: "GET",
        };
      },
      providesTags: ["notifications"],
    }),
    getReferralHistory: builder.query({
      query: () => {
        return {
          url: "/dashboard/referral-history",
          method: "GET",
        };
      },
      providesTags: ["notifications", "referral-history"],
    }),
    getBalance: builder.query({
      query: () => {
        return {
          url: "/payment/balance",
          method: "GET",
        };
      },
      providesTags: ["balance"],
    }),
    paymentHistory: builder.query({
      query: () => {
        return {
          url: "/stripe/history",
          method: "GET",
        };
      },
      providesTags: ["payment-history"],
    }),
    getWithdrawHistory: builder.query({
      query: (params) => {
        const searchParams = new URLSearchParams(params).toString();
        return {
          url: `/payment/withdraw-history?${searchParams}`,
          method: "GET",
        };
      },
      providesTags: ["notifications", "withdraw-history"],
    }),
    withdraw: builder.mutation({
      query: (amount) => ({
        url: "/payment/request-withdrawal",
        method: "POST",
        body: { amount },
      }),
      invalidatesTags: ["notifications", "withdraw-history", "balance"],
    }),
    makePayment: builder.mutation({
      query: (userId) => ({
        url: "/stripe/create-payment",
        method: "POST",
        body: { userId },
      }),
      invalidatesTags: ["notifications", "payment-history"],
    }),
  }),
});

export const {
  useGetNotificationsQuery,
  useGetReferralHistoryQuery,
  useGetWithdrawHistoryQuery,
  useWithdrawMutation,
  useGetBalanceQuery,
  usePaymentHistoryQuery,
  useMakePaymentMutation
} = dashboardApi;
