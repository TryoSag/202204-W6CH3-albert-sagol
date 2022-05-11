import { createSlice } from "@reduxjs/toolkit";

const callingSlice = createSlice({
  name: "calling",
  initialState: false,
  reducers: {
    setCallingOn: () => true,
    setCallingOff: () => false,
  },
});
export const {
  setCallingOn: setCallingOnActionCreator,
  setCallingOff: setCallingOffActionCreator,
} = callingSlice.actions;

export default callingSlice.reducer;
