import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersAPI = createApi({
  reducerPath: "usersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }), // Ensure this is the correct base URL
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users", // Adjust this if your endpoint differs
    }),
  }),
});

export const { useGetUsersQuery } = usersAPI; // Export the hook from the api slice
export default usersAPI;
