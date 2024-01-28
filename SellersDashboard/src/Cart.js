// Cart.js
import React from 'react';

const Cart = ({ cartItems, onCheckout }) => (
  <div>
    <h2>Cart</h2>
    <ul>
      {cartItems.map((item, index) => (
        <li key={index}>
          {item.name} - ${item.price}
        </li>
      ))}
    </ul>
    <p>Total: ${cartItems.reduce((total, item) => total + item.price, 0)}</p>
    <button onClick={onCheckout}>Checkout</button>
  </div>
);

export default Cart;
