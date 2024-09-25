import React, { useState } from 'react';
import './App.css';
import ProductModal from './components/ProductModal';
import DiscountModal from './components/DiscountModal';

function App() {
  const [showProductModal, setShowProductModal] = useState(false);
  const [showDiscountModal, setShowDiscountModal] = useState(false);

  return (
    <div className="product-picker">
      <header className="header">🙎‍♂️Monk Upsell & Cross-sell</header>
      <div className="add-products">
        <div className="product-section">
          <h4>Products</h4>
          <button onClick={() => setShowProductModal(true)}>Select Product</button>
        </div>
        <div className="discount-section">
          <h4>Discount</h4>
          <button onClick={() => setShowDiscountModal(true)}>Add Discount</button>
        </div>
      </div>
      <button className="add-product-button">Add Product</button>
      {showProductModal && <ProductModal onClose={() => setShowProductModal(false)} />}
      {showDiscountModal && <DiscountModal onClose={() => setShowDiscountModal(false)} />}
    </div>
  );
}

export default App;
