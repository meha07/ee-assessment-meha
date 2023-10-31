import React from 'react';

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