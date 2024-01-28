// Product.js
import React from 'react';

const Product = ({ name, description, price, onAddToCart }) => (
  <div>
    <h3>{name}</h3>
    <p>{description}</p>
    <p>Price: ${price}</p>
    <button onClick={onAddToCart}>Add to Cart</button>
  </div>
);

export default Product;


// import React from 'react';
// import Product from './Products';
// const App = () => {
//   return (
//     <div className='text-center'>
//       <h1>Seller Admin Dashboard</h1>
//       <Product />
//     </div>
//   );
// };

// export default App;
