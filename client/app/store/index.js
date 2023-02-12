import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import tasksReducer from "./slices/tasksSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
  },
});

export default store;

export { userLogin } from "./slices/authSlice";
export { fetchAllTasks, addTask } from "./slices/tasksSlice";
