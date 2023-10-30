import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

const ProductCard = ({ product }) => {
  
  return (
      <div className="product-card">
        <div className="product-image"><img src={product.image} alt={product.title} /></div>
        <div className="product-description">
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      </div>
  );
}

export default ProductCard;