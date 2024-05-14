import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { SignupFormData } from "../auth/Signup";
import { LoginFormData } from "../auth/Login";

// API URLs
const signupUrl = "http://localhost:8000/api/users/signup";
const loginUrl = "http://localhost:8000/api/users/login";
const userSessionUrl = "http://localhost:8000/api/users/persistUserSession";
const getAllProductUrl = "http://localhost:8000/api/products/getProducts";
const getLatestProductUrl =
  "http://localhost:8000/api/products/getLatestPRoducts";

// Interfaces    (YA DATA BACKEND SAY AA RAHA HA)
interface User {
  login: boolean;
  products: [{}];
  latestProducts: [{}];
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

// GET ALL PRODUCT ASYNC THUNK
export const getAllProductsAsync = createAsyncThunk(
  "Shop/getProduts",
  async (data) => {

    const searchQuery = data?.search !== undefined && data?.search !== null ? `&search=${data?.search}` : "";
    try {
      const response = await axios.post(`${getProductsUrl}?category=${data.category}&page=${data.page}${searchQuery}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// GET ALL PRODUCT ASYNC THUNK
export const getLatestProductsAsync = createAsyncThunk(
  "products/latest ",
  async () => {
    try {
      const response = await axios.post(getLatestProductUrl);
      //   toast.success(response.data.message);
      console.log("Latest", response.data);
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

// INITIAL STATE
interface AuthState {
  user: User | null;
  loading: boolean;
  products: [];
  latestProducts: [];
}

const initialState: AuthState = {
  user: null,
  loading: false,
  products: [],
  latestProducts: [],
};

const productSlice = createSlice({
  name: "productSlice",
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

      // GET ALL PRODUCTS ADD CASE
      .addCase(getAllProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

      // GET ALL LATEST PRODUCTS ADD CASE
      .addCase(getLatestProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLatestProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allReviews = action.payload;
      })

      // Session ADD CASE
      .addCase(userSessionAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(userSessionAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      });
  },
});

export const { reset } = productSlice.actions;

export default productSlice.reducer;
