import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { CreateReviewPayload, UpdateReviewPayload } from "../pages/selectedItem/SelectedItem";


// API URLs
const createReviewUrl = "http://localhost:8000/api/reviews/createReview";
const updateReviewUrl = "http://localhost:8000/api/reviews/updateReview";
const deleteReviewUrl = "http://localhost:8000/api/reviews/deleteReview";
const getAllReviewsByProductUrl =
  "http://localhost:8000/api/reviews/getAllReviewsByProduct";


// CREATE REVIEWS ASYNC THUNK
export const createreviewsAsync = createAsyncThunk(
  "reviews/create",
  async (formData: CreateReviewPayload) => {
    try {
      const response = await axios.post(createReviewUrl, formData);
      toast.success(response.data.message);
      return response.data;
    } catch (error: any) {
    toast.error(error.response.data.message)
      }
  }
);

// GET ALL REVIEWS BY PRODUCT ASYNC THUNK
export const getallreviewsAsync = createAsyncThunk(
  "reviews/getall",
  async (id:any) => {
    try {
      const response = await axios.post(getAllReviewsByProductUrl, { id });
      return response.data;
    } catch (error: any) {
      throw new Error(error)

    }
  }
);

export const updatereviewsAsync = createAsyncThunk(
  "reviews/update",
  async (formData: UpdateReviewPayload) => {
    try {
      const response = await axios.post(updateReviewUrl, formData);
      toast.success(response.data.message);
      return response.data;
    } catch (error: any) {
      toast.error(error.response.data.error);
      throw new Error(error);
    }
  }
);

// DELETE REVIEWS PRODUCT ASYNC THUNK
export const deletereviewsAsync = createAsyncThunk(
  "reviews/delete",
  async (id:string) => {
    try {
      const response = await axios.post(deleteReviewUrl, { id });
      // toast.success(response.data.message);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      toast.error(error.response.data.error);
      console.error("Error submitting review:", error);
    }
  }
);

interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
  userID: string;
  createdAt: string;
}

// INITIAL STATE
interface ReviewsState {
  loading: boolean;
  allReviews: Review[];
}

const initialState: ReviewsState = {
  loading: false,
  allReviews: [],
};

const reviewsSlice = createSlice({
  name: "reviewsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // GET ALL REVIEWS ADD CASE
      .addCase(getallreviewsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getallreviewsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.allReviews = action.payload;
      });
  },
});

export default reviewsSlice.reducer;
