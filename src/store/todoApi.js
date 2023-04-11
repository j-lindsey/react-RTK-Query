import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const toDoApi = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://jsonplaceholder.typicode.com",
  }),
  endpoints(builder) {
    return {
      FetchToDos: builder.query({
        query: () => {
          return {
            url: "/todos",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchToDosQuery } = toDoApi;
export { toDoApi };

