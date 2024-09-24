import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation

const HomePage = () => {
  const navigate = useNavigate();

  const goToProductPicker = () => {
    navigate('/select-products'); // Navigate to the ProductPickerModal page
  };
  const goToDiscountPage=()=>{
    navigate('/select-discount'); // navigate to discount page)
  }

  return (
    <div className='home-container'>
      <h1 className='heading'>Monk Upsell & Cross-sell</h1>
      <div className="section">
        <div>
          <h4>Product</h4>
          <button onClick={goToProductPicker}>Select Product</button> {/* Update to navigate */}
        </div>
        <div>
          <h4>Discount</h4>
          {/* Add Discount button logic (unchanged) */}
          <button onClick={goToDiscountPage}>Add Discount</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
