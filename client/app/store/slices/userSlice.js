import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/auth/login", { email, password });

      // store user's token in local storage
      localStorage.setItem("userToken", data.token);

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// initialize userToken from local storage
const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(buidler) {
    // login user
    buidler.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    buidler.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.data.user;
      state.userToken = payload.token;
    });

    buidler.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default userSlice.reducer;
