import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TestReduxState } from "../../rootType";

export const testReduxSlice = createSlice({
  name: "testRedux",
  initialState: {
    ability: "ability initialState",
    berry: "berry initialState",
  },
  reducers: {
    loadTestReduxDataInitial: (state) => {
      state.ability = "ability initialState";
      state.berry = "berry initialState";
    },
    loadTestReduxDataSucceeded: (
      state,
      action: PayloadAction<TestReduxState>
    ) => {
      state.ability = action.payload.testRedux.ability;
      state.berry = action.payload.testRedux.berry;
    },
  },
});

export const { actions: testReduxAction } = testReduxSlice;

export default testReduxSlice.reducer;
