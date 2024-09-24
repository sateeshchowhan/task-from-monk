import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage';
import ProductPickerModal from './components/ProductPickerModal'; 
import DiscountPage from './components/DiscountPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/select-products" element={<ProductPickerModal />} />
        <Route path="/select-discount" element={<DiscountPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
