import { createSlice } from "@reduxjs/toolkit";

export interface dishesState {
  searchValue: string;
}

const initialState: dishesState = {
  searchValue: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterName: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setFilterName } = filterSlice.actions;

export default filterSlice.reducer;
