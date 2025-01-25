import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { getCategories, getProducts } from "../../api/products";

const getAllProducts = createAsyncThunk(
  "products/all",  // action name shown in redux 
  async (query, { rejectWithValue }) => {
    try {
      //console.log(query)
      const response = await getProducts(query || {});

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const getAllCategories = createAsyncThunk(
  "products/categories",  // action name shown in redux 
  async (_, { rejectWithValue }) => {
    try {
      //console.log(query)
      const response = await getCategories();

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export { getAllProducts, getAllCategories};
