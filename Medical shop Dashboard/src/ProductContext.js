import React, { createContext, useContext, useState } from 'react';

// Create the context
const ProductContext = createContext();

// Provider component
export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart(prevCart => {
      // Check if product already exists in the cart
      const existingProduct = prevCart.find(item => item.MedicineName === product.MedicineName);
      if (existingProduct) {
        // Increase quantity if product exists
        return prevCart.map(item => 
          item.MedicineName === product.MedicineName
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        // Add new product to the cart
        return [...prevCart, product];
      }
    });
  };

  return (
    <ProductContext.Provider value={{ cart, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
};

// Hook to use the product context
export const useProductContext = () => useContext(ProductContext);
