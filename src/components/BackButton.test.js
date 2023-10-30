import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BackButton from './BackButton';
import '@testing-library/jest-dom'

describe('BackButton Component', () => {
  it('renders the link to the product list', () => {
    render(
      <Router>
        <BackButton />
      </Router>
    );

    const linkElement = screen.getByText('Back to Product List');
    expect(linkElement).toBeInTheDocument();
  });

});