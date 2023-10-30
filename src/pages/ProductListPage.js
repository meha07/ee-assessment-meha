
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, setCurrentPage  } from '../store/productSlice';
// import { fetchProducts } from '../api/productApi';
import ProductCard from '../components/ProductCard';
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useGetProductsQuery } from '../store/api';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const { currentPage, productsPerPage, selectedProductId } = useSelector((state) => state.products);
  const { data: productsList = [], error } = useGetProductsQuery();

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = productsList.slice(startIndex, endIndex);

  const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
  }));
  

useEffect(() => {
  if (productsList) {
    dispatch(setProducts(productsList));
  }
  if (error) {
    console.error('An error occurred:', error);
  }
}, [dispatch, error]);


const handlePageChange = (page) => {
  dispatch(setCurrentPage(page));
};



return (
  <div className="product-list">
    <Container>
        <div className="product-list-header">
          <h1 className="product-list-page">Product Listing</h1>
        </div>

        <div className="product-list-grid">
          <Pagination
                count={Math.ceil(productsList.length / productsPerPage)}
                page={currentPage}
                onChange={(event, page) => handlePageChange(page)}
                size="large"
                color="secondary"
                className="product-pagination"
            />
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12, lg: 16 }}>
            {displayedProducts.map(product => {
                return (
                  <Grid item xs={2} sm={4} md={4} key={product.id} className={product.id === selectedProductId ? 'selected' : ''}>
                      <Item>
                          <Link key={product.id} to={`/product/${product.id}`} className="product-link">
                              <ProductCard key={product.id} product={product} />
                          </Link>
                      </Item>
                  </Grid>
                )
            })}
        </Grid>
        </div>
    </Container>
  </div>
  );
}

export default ProductListPage;
