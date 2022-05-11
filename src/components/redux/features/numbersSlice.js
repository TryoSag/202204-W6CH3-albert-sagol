const { createSlice } = require("@reduxjs/toolkit");

const numbersSlice = createSlice({
  name: "numbers",
  initialState: "",
  reducers: {
    addNumber: (numbers, action) => numbers.concat(action.payload),

    deleteNumbers: () => "",
  },
});
export const {
  addNumber: addNumberActionCreator,
  deleteNumbers: deleteNumbersActionCreator,
} = numbersSlice.actions;

export default numbersSlice.reducer;
