import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";
import tasksReducer from "./slices/tasksSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
  },
});

export default store;

export { userLogin } from "./slices/userSlice";
export { fetchAllTasks, addTask } from "./slices/tasksSlice";
