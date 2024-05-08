import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { SignupFormData } from "../auth/Signup"; // Update the path
import { LoginFormData } from "../auth/Login";

// Rest of your code

// API URLs
const signupUrl = "http://localhost:8000/api/users/signup";
const loginUrl = "http://localhost:8000/api/users/login";
const logoutUrl = "http://localhost:8000/api/users/logout";
const userSessionUrl = "http://localhost:8000/api/users/persistUserSession";
const forgetPassUrl = "http://localhost:8000/api/users/sendResetPasswordOTP";
const verifyOtpPassUrl = "http://localhost:8000/api/users/verifyOtp";
const resetPassUrl = "http://localhost:8000/api/users/updatePassword";

// Interfaces
interface User {
  login: boolean;
  user: {
    name: string;
    email: string;
    phone: string;
    address: string;
    id: string;
  };
}

// CREATE ASYNC THUNK
export const createuserAsync = createAsyncThunk(
  "user/create",
  async (formData: SignupFormData) => {
    try {
      const response = await axios.post(signupUrl, formData);
      toast.success(response.data.message);
      return response.data;
    } catch (error: any) {
      toast.error(error.response.data.error);
    }
  }
);

// LOGIN ASYNC THUNK
export const loginuserAsync = createAsyncThunk(
  "user/login",
  async (formData: LoginFormData) => {
    try {
      const response = await axios.post(loginUrl, formData);
      toast.success(response.data.message);
      return response.data;
    } catch (error: any) {
      toast.error(error.response.data.error);
    }
  }
);

// LOGIN ASYNC THUNK
export const userSessionAsync = createAsyncThunk("user/session", async () => {
  try {
    const response = await axios.get(userSessionUrl);
    return response.data;
  } catch (error: any) {
    throw error;
  }
});

// Logout Function
export const logoutUserAsync = createAsyncThunk("user/logout", async () => {
  try {
    const response = await axios.delete(logoutUrl);
    toast.success(response.data.message);
    return response.data;
  } catch (error: any) {
    throw error;
  }
});

// FORGET ASYNC THUNK
export const forgetuserAsync = createAsyncThunk(
  "user/forget",
  async (formData: FormData) => {
    try {
      const response = await axios.post(forgetPassUrl, formData);
      // toast.success(response.data.message);
      return response.data;
    } catch (error: any) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
      throw error.response.data.error;
    }
  }
);

// VERIFY ASYNC THUNK
export const verifyOtpAsync = createAsyncThunk(
  "user/verify",
  async (formData: FormData) => {
    try {
      const response = await axios.post<User>(verifyOtpPassUrl, formData);
      // toast.success(response.data.message);
      return response.data;
    } catch (error: any) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
      throw error.response.data.error;
    }
  }
);

// RESET ASYNC THUNK
export const resetPassAsync = createAsyncThunk(
  "user/reset",
  async (resetPasswordData: any) => {
    const { id, resetPassword } = resetPasswordData;
    try {
      const response = await axios.post<User>(resetPassUrl, {
        id,
        resetPassword,
      });
      // toast.success(response.data.message);
      return response.data;
    } catch (error: any) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
      throw error.response.data.error;
    }
  }
);

// INITIAL STATE
interface AuthState {
  user: User | null;
  loading: boolean;
  forgetPasswordEmail: string | null;
  resetPassword: string | null;
  validateToken: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  forgetPasswordEmail: null,
  resetPassword: null,
  validateToken: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // SIGN UP ADD CASE
      .addCase(createuserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(createuserAsync.fulfilled, (state, _action) => {
        state.loading = false;
      })

      // LOGIN ADD CASE
      .addCase(loginuserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginuserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })

      // Session ADD CASE
      .addCase(userSessionAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(userSessionAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })

      // FORGET PASSWORD ADD CASE
      .addCase(forgetuserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgetuserAsync.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(forgetuserAsync.rejected, (state) => {
        state.loading = false;
      })

      // logout
      .addCase(logoutUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUserAsync.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;