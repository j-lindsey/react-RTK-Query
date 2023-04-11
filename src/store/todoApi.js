import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 50000,
  headers: {
    "Content-type": "application/json",
  },
});

const axiosBaseQuery =
  () =>
  async ({ url, method, data, params }) => {
    try {
      const result = await api({ url: url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

const toDoApi = createApi({
  reducerPath: "todos",
  baseQuery: axiosBaseQuery(),
  endpoints(builder) {
    return {
      FetchToDos: builder.query({
        providesTags: ["ToDo"],
        query: () => {
          return {
            url: "/todos",
            method: "GET",
          };
        },
      }),
      AddToDos: builder.mutation({
        invalidatesTags: ["ToDo"],
        query: (todo) => {
          return {
            url: "/todos",
            method: "POST",
            body: todo,
          };
        },
      }),
    };
  },
});

export const { useFetchToDosQuery, useAddToDosMutation } = toDoApi;
export { toDoApi };

