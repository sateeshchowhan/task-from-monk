import React from 'react';
import { Link } from 'react-router-dom';

function ProductPicker() {
  return (
    <div>
      <h1>Select Products</h1>
      {/* Add your product selection logic here */}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ProductPicker;
