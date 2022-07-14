import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
	Row, Col, Image, ListGroup, Button, Card,
} from 'react-bootstrap';
import axios from 'axios';

import Rating from '../components/Rating';

function CarRoute() {
	const { id } = useParams();
	const [car, setProduct] = useState([]);

	useEffect(() => {
		async function fetchProduct() {
			const { data } = await axios.get(`http://127.0.0.1:8000/api/cars/${id}/`);
			setProduct(data)
		}

		fetchProduct();
	}, [id])

	return (
		<div>
			<Link to="/" className="btn btn-light my-3">Go Back</Link>
			<Row>
				<Col md={6}>
					<Image src={car.image} alt={car.name} fluid />
				</Col>

				<Col md={3}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h3>{car.name}</h3>
						</ListGroup.Item>

						<ListGroup.Item>
							<Rating value={car.rating} text={`${car.num_reviews} reviews`} />
						</ListGroup.Item>

						<ListGroup.Item>
							<strong>Price:</strong>
							{' '}
							$
							{car.price}
						</ListGroup.Item>

						<ListGroup.Item>
							<strong>Description:</strong>
							{' '}
							{car.description}
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
										{car.price}
									</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Row>
									<Col>
										Status:
									</Col>
									<Col>
										{car.count_in_stock > 0 ? 'In stock' : 'Out of stock'}
									</Col>
								</Row>
							</ListGroup.Item>

							<ListGroup.Item>
								<Button
									className="btn-block"
									disabled={car.count_in_stock === 0}
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
