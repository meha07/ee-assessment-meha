import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import './css/style.css';


const App = () => {
 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
