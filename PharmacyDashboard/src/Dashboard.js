import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const [groupedCart, setGroupedCart] = useState({});

  useEffect(() => {
    let total = 0;
    const groupedItems = cart.reduce((acc, item) => {
      const quantity = Number(item.quantity);
      if (!acc[item.MedicineName]) {
        acc[item.MedicineName] = { ...item, quantity };
      } else {
        acc[item.MedicineName].quantity += quantity;
      }
      total += quantity * Number(item.Price);
      return acc;
    }, {});

    setGroupedCart(groupedItems);
    setTotalCost(total);
  }, [cart]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const foundIndex = updatedCart.findIndex(item => item.MedicineName === product.MedicineName);

    if (foundIndex !== -1) {
      // Convert quantity to a number before summing
      updatedCart[foundIndex].quantity = Number(updatedCart[foundIndex].quantity) + Number(product.quantity);
      var json = JSON.stringify(updatedCart);
      var jsonData = updatedCart[foundIndex];
  
      var price = jsonData.Price;
      var quantity = jsonData.quantity;
      updatedCart[foundIndex]['productTotal'] = parseInt(quantity) * parseInt(price);
  
    } else {
      // Convert quantity to a number before adding the item
      updatedCart.push({ ...product, quantity: Number(product.quantity) });
    }

    // alert(JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const removeFromCart = (medicineName) => {
    setCart(cart.filter(item => item.MedicineName !== medicineName));
  };
  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  const dashboardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  };

  const cartButtonStyle = {
    fontSize: '24px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    position: 'fixed',
    top: '10px',
    right: '10px',
  };

  const cartStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    padding: '10px',
    position: 'absolute',
    top: '60px',
    right: '10px',
    width: '280px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1,
    display: isCartVisible ? 'block' : 'none', 
  };

  const cartItemStyle = {
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const removeButtonStyle = {
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    padding: '3px 6px', 
    fontSize: '12px', 
    lineHeight: '1', 
    verticalAlign: 'middle', 
  };
  
  return (
    <div style={dashboardStyle}>
      <h1>Soniya Pharmacy</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} addToCart={addToCart} />
  
      <button onClick={toggleCartVisibility} style={cartButtonStyle}>
        🛒 Cart 
      </button>
      <div style={cartStyle}>
        <h2>Medicines</h2>
        <table style={{ width: '100%' }}>
                    <tbody>
            {Object.values(groupedCart).map((item, index) => (
              <tr key={index}>
                <td>{item.MedicineName}</td>
                <td>Qty: {item.quantity}</td>
                <td>${item.Price}</td>
                <td>${item.productTotal}</td>
                <td>
                  <button onClick={() => removeFromCart(item.MedicineName)} style={removeButtonStyle}>x</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total Cost: ${totalCost}</p>
      </div>
    </div>
  );
};

export default Dashboard;