import { configureStore } from "@reduxjs/toolkit";
import callingReducer from "../features/callingSlice";
import numbersReducer from "../features/numbersSlice";

const store = configureStore({
  reducer: {
    numbers: numbersReducer,
    calling: callingReducer,
  },
});
export default store;
