import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories, getAllProducts } from "./productsAction";


const initialQueryState = {
  filters: {        // {category : value} , {name : value }
    name:"",
    category:"",
  },
  sort: JSON.stringify({createdAt: -1}),   //sort
  limit:10,                                 //limit
};

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
    error: null,
    query:initialQueryState,
    categories: [],
  },
  reducers:{
      setLimit: (state,action) => {
        //console.log(state.query.limit);
        state.query.limit = action.payload;
      },
      setSort: (state,action) => {
        state.query.sort = action.payload;
      },
      setFilters: (state,action) => {
        state.query.filters = {...state.query.filters, ...action.payload};
      },
      resetQuery: (state) => {
        state.query = initialQueryState;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const {setLimit, setSort, setFilters, resetQuery} = productSlice.actions;

export default productSlice.reducer;
