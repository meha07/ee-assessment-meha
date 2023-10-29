import React, { useRef } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import './css/style.css';


function App() {
 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProductListPage />} />
        {/* Need to check why the below component is not working */}
        {/* <Route path="/product/:id" component={ProductDetailPage} /> */}
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
