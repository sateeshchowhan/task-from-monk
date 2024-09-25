import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductPicker() {
  let navigate = useNavigate();

  return (
    <div className="container">
      <h1>Monk Upsell & Cross-sell</h1>
      <button onClick={() => navigate('/products')}>Select Product</button>
      <button onClick={() => navigate('/discounts')}>Add Discount</button>
    </div>
  );
}

export default ProductPicker;
