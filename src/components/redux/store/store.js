import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "../features/numbersSlice";

const store = configureStore({
  reducer: {
    numbers: sliceReducer,
  },
});
export default store;
