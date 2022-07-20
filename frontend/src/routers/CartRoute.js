/* eslint-disable */

import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';

import { Message } from '../components/Message';
import { addToCart } from '../actions/cartActions';

function CartRoute() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const qty = location.search ? Number(location.search.split('=')[1]) : 1;

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    console.log(cartItems);

    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty));
        }
    }, [dispatch, id, qty]);


    return (
        <div>
            CartRoute
        </div>
    );
}

export default CartRoute;