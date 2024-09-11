import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friends: [],
};

type InitialStateType = typeof initialState;

const sidebarSlice = createSlice({
  name: "sidebarPage",
  initialState,
  reducers: {

  },
});

export const { } = sidebarSlice.actions;

export default sidebarSlice.reducer;
