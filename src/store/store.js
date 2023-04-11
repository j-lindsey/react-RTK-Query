import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { toDoApi } from "./todoApi";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    [toDoApi.reducerPath]: toDoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(toDoApi.middleware);
  },
});

setupListeners(store.dispatch);

export default store;
