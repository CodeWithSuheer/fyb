import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// API URLs
const getAllProductUrl = `http://localhost:8000/api/products/getProducts`;
const getProductById = `http://localhost:8000/api/products/getProductById`;
const getLatestProductUrl =
  "http://localhost:8000/api/products/getLatestPRoducts";

// Interfaces    (YA DATA BACKEND SAY AA RAHA HA)


// GET ALL PRODUCT ASYNC THUNK
export const getAllProductsAsync = createAsyncThunk(
  "Shop/getProduts",
  async (data) => {

    const searchQuery = data?.search !== undefined && data?.search !== null ? `&search=${data?.search}` : "";
    try {
      const response = await axios.post(`${getAllProductUrl}?category=${data.category}&page=${data.page}${searchQuery}`);
      return response.data;
    } catch (error:any) {
      throw new Error(error)
    }
  }
);

// GET ALL PRODUCT ASYNC THUNK
export const getLatestProductsAsync = createAsyncThunk(
  "products/latest ",
  async () => {
    try {
      const response = await axios.post(getLatestProductUrl);
      return response.data;
    } catch (error: any) {
      throw new Error(error)
    }
  }
);

// GET ALL PRODUCT ASYNC THUNK
export const getProductByIdAsync = createAsyncThunk(
  "products/singleProduct ",
  async (id) => {
    try {
      const response = await axios.post(getProductById,{id});
      return response.data;
    } catch (error: any) {
      throw new Error(error)
    }
  }
);

// INITIAL STATE
interface ProductState {
  loading: boolean;
  products: [];
  latestProducts: [];
  singleProduct:[]
}

const initialState: ProductState = {
  loading: false,
  products: [],
  latestProducts: [],
  singleProduct:[]
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
     

      // GET ALL PRODUCTS ADD CASE
      .addCase(getAllProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })

        // GET SINGLE PRODUCTS
        .addCase(getProductByIdAsync.pending, (state) => {
          state.loading = true;
        })
        .addCase(getProductByIdAsync.fulfilled, (state, action) => {
          state.loading = false;
          state.singleProduct = action.payload;
        })

      // GET ALL LATEST PRODUCTS ADD CASE
      .addCase(getLatestProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLatestProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.latestProducts = action.payload;
      })

  },
});

export default productSlice.reducer;
