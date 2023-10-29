
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, setCurrentPage, selectedProductId  } from '../store/productSlice';
import { fetchProducts } from '../api/productApi';
import ProductCard from '../components/ProductCard';
import Pagination from '@mui/material/Pagination';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const ProductListPage = () => {
    const dispatch = useDispatch();
    const { data, currentPage, productsPerPage, selectedProductId } = useSelector((state) => state.products);

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const displayedProducts = data.slice(startIndex, endIndex);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    

  useEffect(() => {
      console.log("sahfsdhfdgsfhdgfh", data);
    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        dispatch(setProducts(products));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  
  const handlePageChange = (page) => {
    
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="product-list">
        <Container fixed>
            <div className="product-list-header">
                <h1 className="product-list-page">Product Listing</h1>
                <Pagination
                    count={Math.ceil(data.length / productsPerPage)}
                    page={currentPage}
                    onChange={(event, page) => handlePageChange(page)}
                    size="large"
                    color="secondary"
                    className="product-pagination"
                />
            </div>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 16 }}>
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
            </Box>
        </Container>
    </div>
  );
}

export default ProductListPage;
