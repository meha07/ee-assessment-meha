import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define your API base query
const baseQuery = fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' });

// Create an API slice
export const api = createApi({
  baseQuery,
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
    }),
    getProductById: builder.query({
      query: (productId) => `products/${productId}`,
    }),
  }),
});

// Export the generated hooks for each endpoint
export const { useGetProductsQuery, useGetProductByIdQuery } = api;