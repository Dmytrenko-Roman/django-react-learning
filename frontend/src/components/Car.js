import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Rating from './Rating';

function Car({ product: car }) {
	return (
		<Card className="my-3 p-3 rounded">
			<Link to={`/car/${car._id}`}>
				<Card.Img src={car.image} />
			</Link>

			<Card.Body>
				<Link to={`/car/${car._id}`}>
					<Card.Title as="div">
						<strong>{car.brand} {car.name}</strong>
					</Card.Title>
				</Link>

				<Card.Text as="div">
					<div className="my-3">
						<Rating
							value={car.rating}
							text={`${car.num_reviews} reviews`}
						/>
					</div>
				</Card.Text>

				<Card.Text as="h3">
					$
					{car.price}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default Car;
