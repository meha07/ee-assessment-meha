import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import { productApi } from './api';
import { productDetailApi } from './productdetailapi';


const store = configureStore({
  reducer: {
    products: productReducer,
    [productApi.reducerPath]: productApi.reducer,
    [productDetailApi.reducerPath]: productDetailApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware()
    .concat(productApi.middleware)
    .concat(productDetailApi.middleware),
  });


export default store;