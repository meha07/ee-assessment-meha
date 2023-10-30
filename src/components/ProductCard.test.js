import React from 'react';
import { render } from '@testing-library/react';
import ProductCard from './ProductCard';
import '@testing-library/jest-dom'

const sampleProduct = {
    title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
    price: 599,
    image: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
};

describe('ProductCard Component', () => {
  it('renders product title', () => {
    const { getByText } = render(<ProductCard product={sampleProduct} />);
    const titleElement = getByText('Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders product price', () => {
    const { getByText } = render(<ProductCard product={sampleProduct} />);
    const priceElement = getByText('$599');
    expect(priceElement).toBeInTheDocument();
  });

  it('renders product image', () => {
    const { getByAltText } = render(<ProductCard product={sampleProduct} />);
    const imageElement = getByAltText('Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin');
    expect(imageElement).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ProductCard product={sampleProduct} />);
    expect(asFragment()).toMatchSnapshot();
  });
});