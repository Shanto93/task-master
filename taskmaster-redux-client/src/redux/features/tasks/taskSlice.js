import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {},
});

export const {} = taskSlice.actions;
export default taskSlice.reducer;
