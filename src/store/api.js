
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiBaseUrl = 'https://fakestoreapi.com';

const baseQuery = fetchBaseQuery({ baseUrl: apiBaseUrl });

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery,
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
    }),
  }),
});

export const { useGetProductsQuery } = productApi;