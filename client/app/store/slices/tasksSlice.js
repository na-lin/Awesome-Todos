import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllTasks = createAsyncThunk(
  "task/fetchAll",
  async (_, thunkAPI) => {
    const {
      auth: { userToken },
    } = thunkAPI.getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };
    const { data } = await axios.get("/api/task", config);
    return data;
  }
);

export const addTask = createAsyncThunk("task/add", async (task, thunkAPI) => {
  const {
    auth: { userToken },
  } = thunkAPI.getState();

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };
  const { data } = await axios.post("/api/task", task, config);
  return data;
});

const tasksSlice = createSlice({
  name: "slice",
  initialState: {
    numOfTasks: 0,
    todoTasks: [],
    completedTasks: [],
  },
  reducers: {},
  extraReducers(buidler) {
    buidler.addCase(fetchAllTasks.fulfilled, (state, action) => {
      state.numOfTasks = action.payload.results;
      state.todoTasks = action.payload.data.tasks.filter(
        (item) => item.state === "todo"
      );
      state.completedTasks = action.payload.data.tasks.filter(
        (item) => item.state !== "todo"
      );
    });

    buidler.addCase(addTask.fulfilled, (state, action) => {
      state.numOfTasks += 1;
      state.todoTasks.push(action.payload.data.task);
    });
  },
});

export default tasksSlice.reducer;
