import React, { useState } from 'react';
import './ProductModal.css'; 

const products = [
  { id: 1, name: 'Product 1', available:'99 available', price: '$20' },
  { id: 2, name: 'Product 2', available:'99 available',price: '$30' },
  { id: 3, name: 'Product 3', available:'99 available',price: '$40' },
  { id: 4, name: 'Product 4', available:'99 available',price: '$50' },
];

function ProductModal({ onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCheckboxChange = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Select Products</h2>
        <input
          type="search"
          placeholder="Search product"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <input
                type="checkbox"
                checked={selectedProducts.includes(product.id)}
                onChange={() => handleCheckboxChange(product.id)}
              />
              <span>{product.name}</span>
              <span>{product.available}</span>
              <span>{product.price}</span>
            </div>
          ))}
        </div>
        <div className="modal-actions">
          <button onClick={onClose} className="cancel-button">Cancel</button>
          <button onClick={onClose} className="add-button">Add</button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
