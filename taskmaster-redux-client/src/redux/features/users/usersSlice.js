import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "shanta islam",
  email: "shanto@gmail.com",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
