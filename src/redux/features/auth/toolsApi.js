import { baseApi } from "@/redux/api/baseApi";

const toolsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getToolCategories: builder.query({
      query: (params) => {
        const searchParams = new URLSearchParams(params).toString();

        return {
          url: `/tools?${searchParams}`, // Append search params to URL
          method: "GET",
        };
      },
      providesTags: ["tool-categories"],
    }),
    getVideosOrFiles: builder.query({
      query: (params) => {
        const searchParams = new URLSearchParams(params).toString();

        return {
          url: `/tools?${searchParams}`, // Append search params to URL
          method: "GET",
        };
      },
      providesTags: ["files"],
    }),
  }),
});

export const { useGetToolCategoriesQuery, useGetVideosOrFilesQuery } = toolsApi;
