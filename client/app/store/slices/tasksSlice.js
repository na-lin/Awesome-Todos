import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const tasksSlice = createSlice({
  name: "slice",
  initialState: {},
  reducers: {},
  extraReducers(buidler) {},
});

export default tasksSlice.reducer;
