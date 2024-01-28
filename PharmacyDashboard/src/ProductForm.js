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
    marginRight: '10px', 
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
    <form autoComplete='off' onSubmit={handleSubmit} style={{ ...formStyle, maxWidth: '800px', margin: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#f9f9f9', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>
              <label htmlFor="medicineName">Medicine Name:</label>
            </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              <input
                id="medicineName"
                type="text"
                className="form-control"
                placeholder="Enter Medicine Name"
                style={{ ...inputStyle, width: '100%', padding: '6px 12px' }}
                value={MedicineName}
                onChange={(e) => setMedicineName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>
              <label htmlFor="description">Description:</label>
            </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              <input
                id="description"
                type="text"
                className="form-control"
                placeholder="Enter Description"
                style={{ ...inputStyle, width: '100%', padding: '6px 12px' }}
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'right' }}>
              <label htmlFor="price">Selling Price:</label>
            </td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
              <input
                id="price"
                type="number"
                className="form-control"
                placeholder="Enter Selling Price"
                style={{ ...inputStyle, width: '100%', padding: '6px 12px' }}
                value={Price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{ textAlign: 'center', padding: '12px' }}>
              <button type="submit" style={{ ...buttonStyle, padding: '8px 15px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white' }}>
                Add Product
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default ProductForm;