import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const addTokenToLocalStorage = (token) => {
  localStorage.setItem("userToken", token);
};

const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("userToken");
};

const getTokenFromLocalStorage = () => {
  const result = localStorage.getItem("userToken");
  const token = result ? result : null;
  return token;
};

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    try {
      const { data } = await axios.post("/api/auth/login", { email, password });
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response.data) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error(error.message);
      }
    }
  }
);

export const userSignup = createAsyncThunk(
  "user/signup",
  async ({ email, password, name, passwordConfirm }) => {
    try {
      const { data } = await axios.post("/api/auth/signup", {
        email,
        password,
        name,
        passwordConfirm,
      });
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response.data) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error(error.message);
      }
    }
  }
);

const initialState = {
  loading: false,
  userInfo: null,
  userToken: getTokenFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.userInfo = null;
      removeTokenFromLocalStorage();
    },
  },
  extraReducers(buidler) {
    // login user
    buidler.addCase(userLogin.pending, (state) => {
      state.loading = true;
    });

    buidler.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.data.user;
      state.userToken = payload.token;
      addTokenToLocalStorage(payload.token);
      toast.success(`Welcom Back! ${payload.data.user.name}`);
    });

    buidler.addCase(userLogin.rejected, (state, { error }) => {
      state.loading = false;
      toast.error(`Opps: ${error.message}`);
    });

    // user Signup
    buidler.addCase(userSignup.pending, (state) => {
      state.loading = true;
    });

    buidler.addCase(userSignup.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.data.user;
      state.userToken = payload.token;
      addTokenToLocalStorage(payload.token);
      toast.success(`Welcom Back! ${payload.data.user.name}`);
    });

    buidler.addCase(userSignup.rejected, (state, { error }) => {
      state.loading = false;
      toast.error(`Opps: ${error.message}`);
    });
  },
});

export default userSlice.reducer;
