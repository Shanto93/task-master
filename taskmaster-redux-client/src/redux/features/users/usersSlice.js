import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Shanta Islam",
  email: "shantoislam7363@gmail.com",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
