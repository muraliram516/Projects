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
    display: isCartVisible ? 'block' : 'none', // Hide or show cart
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
    padding: '3px 6px', // Reduced padding for a smaller button
    fontSize: '12px', // Optional: Smaller font size for the button text
    lineHeight: '1', // Adjust line height to ensure the button is not too tall
    verticalAlign: 'middle', // Aligns button text vertically
  };
  
  return (
    <div style={dashboardStyle}>
      <h1>Medicine Shop Admin Dashboard</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} addToCart={addToCart} />

      <button onClick={toggleCartVisibility} style={cartButtonStyle}>
        🛒 Cart
      </button>
      <div style={cartStyle}>
        <h2>Shopping Cart</h2>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {Object.values(groupedCart).map((item, index) => (
            <li key={index} style={cartItemStyle}>
              {item.MedicineName} - Qty: {item.quantity} - ${item.Price} = {item.productTotal} 
              <button onClick={() => removeFromCart(item.MedicineName)} style={removeButtonStyle}>x</button>
            </li>
          ))}
        </ul>
        <p>Total Cost: ${totalCost}</p>
      </div>
    </div>
  );
};

export default Dashboard;
