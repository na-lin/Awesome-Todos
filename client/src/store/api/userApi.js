import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3010",
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
