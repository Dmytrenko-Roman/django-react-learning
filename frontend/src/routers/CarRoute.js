import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import {
    Row, Col, Image, ListGroup, Button, Card,
} from 'react-bootstrap';

import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { retrieveCarDetail } from '../actions/carActions';

function CarRoute() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const carDetail = useSelector(state => state.carDetail);
    const { loading, error, car } = carDetail;

    useEffect(() => {
        dispatch(retrieveCarDetail(id));
    }, [dispatch, id]);

    return (
        <div>
            <Link to="/" className="btn btn-light my-3">Go Back</Link>
            {
                loading ?
                    <Loader />
                    : error
                        ? <Message variant='danger'>{error}</Message>
                        : <Row>
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
            }
        </div>
    );
}

export default CarRoute;
