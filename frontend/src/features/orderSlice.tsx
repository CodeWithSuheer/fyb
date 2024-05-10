import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { ReviewFormData } from "../pages/selectedItem/SelectedItem";

// API URLs
const createOrderUrl = "http://localhost:8000/api/orders/createOrder";
const getAllOrderUrl = "http://localhost:8000/api/orders/getAllOrdersForUser";
const updateOrderUrl = "http://localhost:8000/api/orders/updateOrder";

// Interfaces
// interface User {
//   id: string;
// }

// CREATE REVIEWS ASYNC THUNK
export const createOrderAsync = createAsyncThunk(
  "reviews/create",
  async (formData) => {
    try {
      const response = await axios.post(createOrderUrl, formData);
      // toast.success(response.data.message);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      toast.error(error.response.data.error);
      console.error("Error submitting review:", error);
    }
  }
);

// GET ALL REVIEWS BY PRODUCT ASYNC THUNK
export const getallOrderAsync = createAsyncThunk(
  "reviews/getall",
  async (id) => {
    try {
      const response = await axios.post(getAllOrderUrl, { id });
      toast.success(response.data.message);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      toast.error(error.response.data.error);
      console.error("Error submitting review:", error);
    }
  }
);

export const updateOrderAsync = createAsyncThunk(
  "reviews/update",
  async (formData: ReviewFormData) => {
    try {
      const response = await axios.post(updateOrderUrl, formData);
      // toast.success(response.data.message);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      toast.error(error.response.data.error);
      console.error("Error submitting review:", error);
    }
  }
);

// INITIAL STATE
interface ReviewsState {
  loading: boolean;
  allOrders: [];
}

const initialState: ReviewsState = {
  loading: false,
  allOrders: [],
};

const orderSlice = createSlice({
  name: "orderSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // GET ALL REVIEWS ADD CASE
      .addCase(getallOrderAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getallOrderAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allOrders = action.payload;
      });
  },
});

export default orderSlice.reducer;
