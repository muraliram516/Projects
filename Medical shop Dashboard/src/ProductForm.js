// // src/components/ProductForm.js
import React, { useState } from 'react';

const ProductForm = ({ addProduct }) => {
  const [MedicineName, setMedicineName] = useState('');
  const [Description, setDescription] = useState('');
  const [Price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      MedicineName,
      Description,
      Price,
    };
    addProduct(newProduct);
    setMedicineName('');
    setDescription('');
    setPrice('');
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'center',
    margin: '20px',
  };

  const inputStyle = {
    marginRight: '10px', // Added margin for spacing between inputs
    padding: '8px',
    width: '200px',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        className="form-control"
        placeholder="MedicineName"
        style={inputStyle}
        value={MedicineName}
        onChange={(e) => setMedicineName(e.target.value)}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Description"
        style={inputStyle}
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        className="form-control"
        placeholder="Selling Price"
        style={inputStyle}
        value={Price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit" style={buttonStyle}>
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
