import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function DiscountPage() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Cotton classic sneaker', discount: 20, variation: false },
    { id: 2, name: 'Cotton classic sneaker', discount: 20, variation: false },
    { id: 3, name: 'Cotton classic sneaker', discount: 20, variation: false },
    { id: 4, name: 'Cotton classic sneaker', discount: 20, variation: false },
  ]);

  const handleDiscountChange = (id, value) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, discount: value } : product
    ));
  };

  const toggleVariation = (id) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, variation: !product.variation } : product
    ));
  };

  return (
    <div>
      <h1>Add Discounts</h1>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span>{product.name}</span>
            </div>
            <div>
              <input
                type="number"
                value={product.discount}
                onChange={(e) => handleDiscountChange(product.id, e.target.value)}
                style={{ width: '50px' }}
              /> %
              <button onClick={() => toggleVariation(product.id)} style={{ marginLeft: '10px' }}>
                {product.variation ? 'Hide' : 'Show'} variation
              </button>
            </div>
          </div>
        </div>
      ))}
      <Link to="/">Back to Home</Link>
      <div
      style={{ marginTop: '20px', textAlign: 'center' }}>
      <button className="add-product-button"style={{ backgroundColor: 'white', color: 'black', border: '1px solid black' }}>Add Products</button>
      </div>
    </div>
  );
}

export default DiscountPage;
