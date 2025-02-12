import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      const lastElement = state.tasks.at(-1);
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },

    removeTasks: (state, { payload }) => {
      state.tasks = state.tasks.filter((task) => task.id != payload);
    },
  },
});

export const { addTask, removeTasks } = taskSlice.actions;
export default taskSlice.reducer;
