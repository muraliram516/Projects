// import React, { useState, useEffect } from 'react';
// import { useProductContext } from './ProductContext';

// const Cart = () => {
//   const { cart, updateQuantity } = useProductContext();
//   const [quantities, setQuantities] = useState({});

//   useEffect(() => {
//     // Initialize quantities state with the current quantity of each product in the cart
//     const initialQuantities = {};
//     cart.forEach((product, index) => {
//       initialQuantities[index] = product.quantity;
//     });
//     setQuantities(initialQuantities);
//   }, [cart]);

//   const handleQuantityChange = (index, newQuantity) => {
//     setQuantities({ ...quantities, [index]: newQuantity });
//     // Optionally, update the quantity in the global context
//     updateQuantity(index, newQuantity);
//   };

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <p>Items in Cart: {cart.length}</p>
//       <ul className="list-group">
//         {cart.map((product, index) => (
//           <li className="list-group-item" key={index}>
//             {product.name} - ${product.price} - 
//             <input 
//               type="number" 
//               value={quantities[index] || product.quantity}
//               onChange={(e) => handleQuantityChange(index, parseInt(e.target.value, 10))}
//               style={{ width: '50px', marginLeft: '10px' }}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cart;


import React from 'react';
import { useProductContext } from './ProductContext';

const Cart = () => {
  const { cart } = useProductContext();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Items in Cart: {cart.length}</p>
      <ul className="list-group">
        {cart.map((product, index) => (
          <li className="list-group-item" key={index}>
            {product.name} - ${product.price} - {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
