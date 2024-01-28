import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Product() {
	const [productId, setProductId] = useState('');
	const [productName, setProductName] = useState('');
	const [productPrice, setProductPrice] = useState('');
	const [category, setCategory] = useState('electronic');
	const [products, setProducts] = useState([]);
	const handleProductIdChange = (e) => {
		setProductId(e.target.value);
	};
	const handleProductNameChange = (e) => {
		setProductName(e.target.value);
	};
	const handleProductPriceChange = (e) => {
		setProductPrice(e.target.value);
	};
	const handleCategoryChange = (e) => {
		setCategory(e.target.value);
	};
	const checkIdExists = (idToCheck) => {
		return products.some(product => product.id === idToCheck);
	};
	const handleAddProduct = () => {
		if (productId && productName && productPrice) {
			const newProduct = {
				id: productId,
				name: productName,
				price: parseFloat(productPrice),
				category: category,
			};
			const idToCheck = productId;
			if (checkIdExists(idToCheck)) {
				alert(`Product with id ${idToCheck} exists.`);
			} else {
				setProducts([...products, newProduct]);
				setProductId('');
				setProductName('');
				setProductPrice('');
			}
		}
	};
	const handleDeleteProduct = (productIdToDelete) => {
		const updatedProducts = products.filter((product) => product.id !== productIdToDelete);
		setProducts(updatedProducts);
	};
	const categories = ['electronic', 'food', 'skincare'];
	return (
		<div className="container mt-4">
			<table className="table">
				<thead>
					<tr>
						<th>Product ID</th>
						<th>Product Name</th>
						<th>Selling Price</th>
						<th>Category</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><input type="number" className="form-control" value={productId} onChange={handleProductIdChange} /></td>
						<td>   <input type="text" className="form-control" value={productName} onChange={handleProductNameChange} /></td>
						<td>    <input type="number" className="form-control" value={productPrice} onChange={handleProductPriceChange} /></td>
						<td>
							<select className="form-control" value={category} onChange={handleCategoryChange}>
								{categories.map((cat) => (
									<option key={cat} value={cat}>
										{cat.charAt(0).toUpperCase() + cat.slice(1)} Items
									</option>
								))}
							</select>
						</td>
						<td>    <button className="btn btn-primary " onClick={handleAddProduct}>Add Product</button></td>
					</tr>
				</tbody>
			</table>

			{categories.map((cat) => {
				const categoryProducts = products.filter((product) => product.category === cat);
				if (categoryProducts.length === 0) {
					return (
						<div key={cat} className="mt-4">
							<h2>{cat.charAt(0).toUpperCase() + cat.slice(1)} Items List</h2>
							<p>No records found.</p>
						</div>
					);
				}
				return (
					<div key={cat} className="mt-4">
						<h2>{cat.charAt(0).toUpperCase() + cat.slice(1)} Items List</h2>
						<table className="table">
							<thead>
								<tr>
									<th>Product ID</th>
									<th>Product Name</th>
									<th>Selling Price</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{categoryProducts.map((product) => (
									<tr key={product.id}>
										<td>{product.id}</td>
										<td>{product.name}</td>
										<td>${product.price}</td>
										<td>
											<button className="btn btn-danger" onClick={() => handleDeleteProduct(product.id)}>
												Delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				);
			})}
		</div>
	);
}
export default Product;