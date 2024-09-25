import React, { useState } from 'react';
import './DiscountModal.css';

function DiscountModal({ onClose }) {
  const [products, setProducts] = useState([
    { id: 1, name: '1. Nike sneakers', discount: '20%' },
    { id: 2, name: '2. Puma sneakers', discount: '30%' },
    { id: 3, name: '3. Adidas sneakers', discount: '10%' },
    {id: 4, name:'4. Power sneakers', discount:'40%'}
  ]);

  const [showDetails, setShowDetails] = useState({});

  // Function to toggle product details
  const toggleDetails = (productId) => {
    setShowDetails((prevDetails) => ({
      ...prevDetails,
      [productId]: !prevDetails[productId],
    }));
  };

  // Function to remove a product from the list
  const removeProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Add Discounts</h2>

        {/* Product List with Discounts */}
        <div className="product-discounts">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <div className="product-info">
                <div className="product-details-header">
                  <span className="product-name">{product.name}</span>
                  <span className="discount-percent">{product.discount}</span>
                  <span className="off-text">OFF</span>
                  <span
                    className="cancel-icon"
                    onClick={() => removeProduct(product.id)}
                  >
                    &times;
                  </span>
                  <span
                    className="arrow-icon"
                    onClick={() => toggleDetails(product.id)}
                  >
                    {showDetails[product.id] ? '▲' : '▼'}
                  </span>
                </div>
              </div>

              {/* Conditionally render product details directly below */}
              {showDetails[product.id] && (
                <div className="product-details">
                  <div className="product-details-header">
                    <span className="product-name">{product.name}</span>
                    <span className="discount-percent">{product.discount}</span>
                    <span className="off-text">OFF</span>
                    <span className="cancel-icon">&times;</span>
                  </div>
                  {/* Additional details can go here */}
                  <ul>
                    <li>Variant 1: More discount info</li>
                    <li>Variant 2: More discount info</li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DiscountModal;
