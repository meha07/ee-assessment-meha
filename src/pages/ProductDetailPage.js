import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectSelectedProductId } from '../selectors/productSelectors';
import { setSelectedProduct  } from '../store/productSlice';
import { Link } from 'react-router-dom';


const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();


  const handleGoBack = () => {
    // Set Selected Product
    console.log("dfbvdhvghdbvghfdbv", product.id);
    dispatch(setSelectedProduct(product.id))
  };

  useEffect(() => {
    // Fetch the product details using the product ID
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <Container fixed>
        <BackButton />
        <div onClick={handleGoBack}>
          <Link to="/" className="back-button">
           Back to Product List
          </Link>
        </div>
        <div className="product-detail-abc">
          <div className="product-detail-img">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-detail-des">
            <h1>{product.title}</h1>
            <p>${product.price}</p>
            <p> 
              <Typography component="legend">Ratings</Typography>
              <Rating name="read-only" value={product.rating.rate} readOnly /> 
              <span className="product-rating-count">({product.rating.count} ratings)</span>
            </p>
            <p>{product.description}</p>
          </div>
        </div>
       
      </Container>
    </div>
  );
}

export default ProductDetailPage;