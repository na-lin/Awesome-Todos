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

const tasksSlice = createSlice({
  name: "slice",
  initialState: {
    numOfTasks: 0,
    allTasks: [],
  },
  reducers: {},
  extraReducers(buidler) {
    buidler.addCase(fetchAllTasks.fulfilled, (state, action) => {
      state.numOfTasks = action.payload.results;
      state.allTasks = action.payload.data.tasks;
    });
  },
});

export default tasksSlice.reducer;
