// // Product.js
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function product() {
//   const [medicineName, setMedicineName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [cart, setCart] = useState([]);

//   const handleMedicineNameChange = (e) => {
//     setMedicineName(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handlePriceChange = (e) => {
//     setPrice(e.target.value);
//   };

//   const handleAddToCart = () => {
//     if (medicineName && description && price) {
//       const newItem = {
//         medicineName,
//         description,
//         price: parseFloat(price),
//       };
//       setCart([...cart, newItem]);
//       setMedicineName('');
//       setDescription('');
//       setPrice('');
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Medicine Name</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <input type="text" className="form-control" value={medicineName} onChange={handleMedicineNameChange} />
//             </td>
//             <td>
//               <input type="text" className="form-control" value={description} onChange={handleDescriptionChange} />
//             </td>
//             <td>
//               <input type="number" className="form-control" value={price} onChange={handlePriceChange} />
//             </td>
//             <td>
//               <button className="btn btn-primary" onClick={handleAddToCart}>
//                 Add to Cart
//               </button>
//             </td>
//           </tr>
//         </tbody>
//       </table>

//       <div className="mt-4">
//         <h2>Shopping Cart</h2>
//         <p>Items in Cart: {cart.length}</p>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Medicine Name</th>
//               <th>Description</th>
//               <th>Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cart.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.medicineName}</td>
//                 <td>{item.description}</td>
//                 <td>${item.price}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default product;
