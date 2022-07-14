import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

import Product from '../components/Product';

function HomeRoute() {
	const [cars, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
			const { data } = await axios.get(`http://127.0.0.1:8000/api/cars/`);
			setProducts(data);
		}

		fetchProducts();
	}, [])

	return (
		<div>
			<h1>Latest Cars</h1>
			<Row>
				{cars.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</div>
	);
}

export default HomeRoute;
