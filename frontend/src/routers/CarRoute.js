import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
	Row, Col, Image, ListGroup, Button, Card,
} from 'react-bootstrap';
import axios from 'axios';

import Rating from '../components/Rating';

function CarRoute() {
	const { id } = useParams();
	const [product, setProduct] = useState([]);

	useEffect(() => {
		async function fetchProduct() {
			const { data } = await axios.get(`http:://127.0.0.1:8000/api/products/${id}`);
			setProduct(data)
		}

		fetchProduct();
	}, [id])

	return (
		<div>
			<Link to="/" className="btn btn-light my-3">Go Back</Link>
			<Row>
				<Col md={6}>
					<Image src={product.image} alt={product.name} fluid />
				</Col>

				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h3>{product.name}</h3>
						</ListGroup.Item>

						<ListGroup.Item>
							<Rating value={product.rating} text={`${product.numReviews} reviews`} />
						</ListGroup.Item>

						<ListGroup.Item>
							<strong>Price:</strong>
							{' '}
							$
							{product.price}
						</ListGroup.Item>

						<ListGroup.Item>
							<strong>Description:</strong>
							{' '}
							{product.description}
						</ListGroup.Item>
					</ListGroup>
				</Col>

				<Col md={3}>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<Row>
									<Col>
										Price:
									</Col>
									<Col>
										$
										{product.price}
									</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>
										Status:
									</Col>
									<Col>
										{product.countInStock > 0 ? 'In stock' : 'Out of stock'}
									</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Button
									className="btn-block"
									disabled={product.countInStock === 0}
									type="button"
								>
									Add to cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default CarRoute;
