import { configureStore } from "@reduxjs/toolkit";
import usersAPI from "./services/usersAPI.js";

const store = configureStore({
  reducer: {
    [usersAPI.reducerPath]: usersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersAPI.middleware),
});

export default store;
