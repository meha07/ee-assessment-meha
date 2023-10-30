// api.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiBaseUrl = 'https://fakestoreapi.com';

const baseQuery = fetchBaseQuery({ baseUrl: apiBaseUrl });

export const productDetailApi = createApi({
  reducerPath: 'productDetailApi',
  baseQuery,
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (id) => `products/${id}`,
      providesTags: ['Product'],
    }),
  }),
});

export const { useGetProductDetailQuery } = productDetailApi;
