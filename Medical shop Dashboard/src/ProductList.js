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
    width: '50px', // Set the width of the quantity input
    marginRight: '0.5rem', // Add some space between the input and the button
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

  return (
    <Container style={containerStyle}>
      <h2 className="text-center">Products Lists</h2>
      <div className="product-list" style={{ width: '67%' }}>
        {products.map((product, index) => (
          <div key={index} className="product-item" style={productStyle}>
            <div className="product-info">
              <h3>{product.MedicineName}</h3>
              <p>{product.description}</p>
              <h3 style={priceStyle}><b>${product.Price}</b></h3>
            </div>
            <div className="product-action" style={actionStyle}>
              <label htmlFor={`quantity-${index}`}>Quantity</label>
              <input
                id={`quantity-${index}`}
                type="number"
                defaultValue={1}
                min={1}
                style={quantityInputStyle}
              />
              
              <Button variant="primary" onClick={() => {
                
                const quantity = document.getElementById(`quantity-${index}`).value;
                // console.log("message"+quantity)
                product['quantity'] = quantity;
                product['productTotal'] = product.Price;
               // alert('product- '+JSON.stringify(product)   )
                addToCart({ ...product});
              }}>
                Add to Cart
              </Button>

              {/* <Button variant="primary" onClick={() => addToCart(product)}>
                Add to Cart
              </Button> */}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProductList;



// import React from 'react';
// import { Button, Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ProductList = ({ products, addToCart }) => {
//   const productStyle = {
//     borderBottom: '1px solid black',
//     paddingBottom: '1rem',
//     marginBottom: '1rem',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   };

//   const priceStyle = {
//     color: 'red',
//     fontSize: '1rem'
//   };

//   const containerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   };

//   return (
//     <Container style={containerStyle}>
//       <h2 className="text-center">Product List</h2>
//       <div className="product-list" style={{ width: '67%' }}>
//         {products.map((product, index) => (
//           <div key={index} className="product-item" style={productStyle}>
//             <div className="product-info">
//               <h3>{product.MedicineName}</h3>
//               <p>{product.description}</p>
//               <h3 style={priceStyle}><b>${product.Price}</b></h3>
//             </div>
//             <div className="product-action">
//               <Button variant="primary" onClick={() => addToCart(product)}>
//                 Add to Cart
//               </Button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default ProductList;



// import React from 'react';

// const ProductList = ({ products, addToCart }) => {
//   return (
//     <div>
//       <h2>Product List</h2>
//       <table className="product-table">
//         <thead>
//           <tr>
//             <th>Medicine Name</th>
//             <th>Description</th>
//             <th>Selling Price</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product, index) => (
//             <tr key={index}>
//               <td>{product.MedicineName}</td>
//               <td>{product.description}</td>
//               <td>${product.Price}</td>
//               <td>
//                 <button onClick={() => addToCart(product)}>Add to Cart</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProductList;



// import React from 'react';

// const ProductList = ({ products }) => {
//   return (
//     <div>
//       <h2>Product List</h2>
//       <ul>
//         {products.map((product, index) => (
//           <li key={index}>
//             <strong>{product.medicineName}</strong> <p>{product.description}</p> <p>Price: ${product.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;
