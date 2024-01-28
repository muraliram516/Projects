import React from 'react';
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = ({ products, addToCart }) => {
  const productStyle = {
    borderBottom: '1px solid black',
    paddingBottom: '1rem',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const priceStyle = {
    color: 'red',
    fontSize: '1rem'
  };

  const quantityInputStyle = {
    width: '50px', 
    marginRight: '0.5rem', 
  };

  const actionStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  return(
    <Container style={containerStyle}>
      <h2 className="text-center">Products Lists</h2>
      <table striped bordered hover style={{ width: '67%', border: '1px solid black' }}>
        <thead>
          <tr style={{ border: '1px solid black' }}>
            <th>Medicine Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} style={{ border: '1px solid black' }}>
              <td style={{ border: '1px solid black' }}>{product.MedicineName}</td>
              <td style={{ border: '1px solid black' }}>{product.Description}</td>
              <td style={{ ...priceStyle, border: '1px solid black' }}><b>${product.Price}</b></td>
              <td style={{ border: '1px solid black' }}>
                <input
                  id={`quantity-${index}`}
                  type="number"
                  defaultValue={1}
                  min={1}
                  style={quantityInputStyle}
                />
              </td>
              <td style={{ border: '1px solid black' }}>
                <Button variant="primary" onClick={() => {
                  const quantity = document.getElementById(`quantity-${index}`).value;
                  product['quantity'] = quantity;
                  product['productTotal'] = product.Price;
                  addToCart({ ...product });
                }}>
                  Add to Cart
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default ProductList;