import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3010",
    prepareHeaders: (headers, { getState }) => {
      const token = JSON.parse(localStorage.getItem("jwt"));
      headers.set("Authentication", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchLoggedInUser: builder.query({
        query: () => {
          return {
            url: "/api/auth/getme",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchLoggedInUserQuery } = userApi;
export { userApi };
