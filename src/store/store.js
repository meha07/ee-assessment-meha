import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
// import { productApi } from './api';
// import { productDetailApi } from './productdetailapi';
import { api } from './apiSlice';


const store = configureStore({
  reducer: {
    products: productReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),

  });


export default store;