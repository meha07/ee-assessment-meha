import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const BackButton = () => {
  return (
    <Link to="/" className="back-button">
      <ArrowBackIcon />Back to Product List
    </Link>
  );
}

export default BackButton;