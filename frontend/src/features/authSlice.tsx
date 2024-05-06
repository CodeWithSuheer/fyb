import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// API URLs
const signupUrl = "http://localhost:8000/api/users/signup";
const loginUrl = "http://localhost:8000/api/users/login";
const forgetPassUrl = "http://localhost:8000/api/users/sendResetPasswordOTP";
const verifyOtpPassUrl = "http://localhost:8000/api/users/verifyOtp";
const resetPassUrl = "http://localhost:8000/api/users/updatePassword";
const getUsersForBranch = "http://localhost:8000/api/users/getUsersForBranch";

// Interfaces
interface User {
  userId: string;
  // Add other properties as needed
}

interface ResetPasswordData {
  id: string;
  resetPassword: string;
}

interface BranchData {
  // Define the shape of branch data
}

// CREATE ASYNC THUNK
export const createuserAsync = createAsyncThunk(
  "user/create",
  async (formData: FormData) => {
    try {
      const response = await axios.post<User>(signupUrl, formData);
      // toast.success(response.data.message);
      return response.data;
    } catch (error: any) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
      throw error.response.data.error;
    }
  }
);

// LOGIN ASYNC THUNK
export const loginuserAsync = createAsyncThunk(
  "user/login",
  async (formData: FormData) => {
    try {
      const response = await axios.post<User>(loginUrl, formData);
      // toast.success(response.data.message);
      return response.data;
    } catch (error: any) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
      throw error.response.data.error;
    }
  }
);

// FORGET ASYNC THUNK
export const forgetuserAsync = createAsyncThunk(
  "user/forget",
  async (formData: FormData) => {
    try {
      const response = await axios.post<User>(forgetPassUrl, formData);
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
  async (resetPasswordData: ResetPasswordData) => {
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

export const GetUserBYBranch = createAsyncThunk(
  "user/GetUserBYBranch",
  async (branchData: BranchData) => {
    try {
      const response = await axios.post(getUsersForBranch, branchData);
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
  createUser: User | null;
  user: User | null;
  loading: boolean;
  userId: string | null;
  forgetPasswordEmail: string | null;
  resetPassword: string | null;
  validateToken: string | null;
  getUsersForBranch: BranchData[];
}

const initialState: AuthState = {
  createUser: null,
  user: null,
  loading: false,
  userId: null,
  forgetPasswordEmail: null,
  resetPassword: null,
  validateToken: null,
  getUsersForBranch: [],
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
      .addCase(createuserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.createUser = action.payload;
      })
      .addCase(createuserAsync.rejected, (state) => {
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
      .addCase(loginuserAsync.rejected, (state) => {
        state.loading = false;
      })

      // FORGET PASSWORD ADD CASE
      .addCase(forgetuserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgetuserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.userId = action.payload.userId;
      })
      .addCase(forgetuserAsync.rejected, (state) => {
        state.loading = false;
      })

      .addCase(GetUserBYBranch.pending, (state) => {
        state.loading = true;
      })
      .addCase(GetUserBYBranch.fulfilled, (state, action) => {
        state.loading = false;
        state.getUsersForBranch = action.payload;
      })
      .addCase(GetUserBYBranch.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
