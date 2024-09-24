import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductPickerModal = ({ isOpen, onRequestClose }) => {
  const [product, setProduct] = useState({
    name: '',
    availableQuantity: 0,
    price: 0,
    discount: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: Number(value) || value // Ensure numbers are parsed correctly
    }));
  };

  const addProduct = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
      if (response.ok) {
        const newProduct = await response.json();
        toast.success('Product successfully added!'); // Show success toast
        onRequestClose(); // Close modal on successful add
      } else {
        throw new Error('Failed to add product');
      }
    } catch (err) {
      toast.error(err.message); // Show error toast if there is an issue
    }
  };

  return (
    <div>
      <input type="text" name="name" value={product.name} onChange={handleInputChange} placeholder="Product Name" />
      <input type="number" name="availableQuantity" value={product.availableQuantity} onChange={handleInputChange} placeholder="Available Quantity" />
      <input type="number" name="price" value={product.price} onChange={handleInputChange} placeholder="Price" />
      <input type="number" name="discount" value={product.discount} onChange={handleInputChange} placeholder="Discount" />
      <button onClick={addProduct}>Add Product</button>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default ProductPickerModal;
