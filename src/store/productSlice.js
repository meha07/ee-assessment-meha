// src/store/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [], // Store the product data
    currentPage: 1, // Track the current page
    selectedProduct: null, // Store the selected product
    productsPerPage: 5,
    selectedProductId: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setCurrentPage: (state, action) => {
      console.log("fvdsfvgsdvfgh", state, action);
      state.currentPage = action.payload;
    },
    // selectProduct: (state, action) => {
    //   state.selectedProduct = action.payload;
    // },
    // setPage: (state, action) => {
    //   state.page = action.payload;
    // },
    setSelectedProduct: (state, action) => {
      state.selectedProductId = action.payload;
    },
  },
});

export const { setProducts, setCurrentPage, setSelectedProduct} = productSlice.actions;
export default productSlice.reducer;
