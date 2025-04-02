import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../config/constant";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/user/login`,
        userCredentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Login successful!");
      return response.data;
    } catch (error) {
      if (error.response) {
        const errorMessage =
          error.response.data.message || "Login failed. Please try again.";
        toast.error(errorMessage);
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        const networkError = "Network error. Please try again.";
        toast.error(networkError);
        return rejectWithValue({ message: networkError });
      } else {
        const unexpectedError =
          error.message || "An unexpected error occurred.";
        toast.error(unexpectedError);
        return rejectWithValue({ message: unexpectedError });
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
    emailError: null,
    passwordError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        if (action.payload.email) {
          state.emailError = action.payload.email;
        }
        if (action.payload.password) {
          state.passwordError = action.payload.password;
        }
        state.error =
          action.payload.message || "An error occurred. Please try again.";
      });
  },
});

export default authSlice.reducer;
