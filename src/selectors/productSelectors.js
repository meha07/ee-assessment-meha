import { createSelector } from 'reselect';


const selectProducts = (state) => state.products;

// Create a selector to get the selected product ID
export const selectSelectedProductId = createSelector(
  [selectProducts],
  (products) => products.selectedProductId
);