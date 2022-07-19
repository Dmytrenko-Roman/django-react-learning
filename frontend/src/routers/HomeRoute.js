import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import Car from '../components/Car';
import Loader from '../components/Loader';
import Message from '../components/Message';

import { listCars } from '../actions/carActions';

function HomeRoute() {
    const dispatch = useDispatch();
    const carList = useSelector(state => state.carList);
    const { error, loading, cars } = carList;

    useEffect(() => {
        dispatch(listCars());
    }, [dispatch]);

    return (
        <div>
            <h1>Latest Cars</h1>
            {
                loading ? <Loader />
                    : error ? <Message variant='danger'>{error}</Message>
                        :
                        <Row>
                            {cars.map((car) => (
                                <Col key={car._id} sm={12} md={6} lg={4} xl={3}>
                                    <Car product={car} />
                                </Col>
                            ))}
                        </Row>
            }
        </div>
    );
}

export default HomeRoute;
