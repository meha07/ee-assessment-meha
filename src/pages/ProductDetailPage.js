import React from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { setSelectedProduct  } from '../store/productSlice';
import { useGetProductByIdQuery } from '../store/apiSlice';


const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: product = [], error, isLoading } = useGetProductByIdQuery(id);
  
  const handleGoBack = () => {
    // Set Selected Product
    if (product) {
      dispatch(setSelectedProduct(product.id))
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <Container>
        <div className="back-button-wrapper" onClick={handleGoBack}>
          <BackButton />
        </div>
        <div className="product-detail-wrapper">
          <div className="product-detail-img">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-detail-des">
            <h1>{product.title}</h1>
            <p>${product.price}</p>
            <p> 
              <Typography component="legend">Ratings</Typography>
              <Rating name="read-only" value={product.rating && product.rating.rate} readOnly /> 
              <span className="product-rating-count">({product.rating && product.rating.count} ratings)</span>
            </p>
            <p>{product.description}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductDetailPage;
