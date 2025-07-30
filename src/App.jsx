import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import AdminPage from './pages/AdminPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import SoftwareFormPage from './pages/SoftwareFormPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product" element={<ProductDetailsPage />} />
        <Route path="/admin/new" element={<SoftwareFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
