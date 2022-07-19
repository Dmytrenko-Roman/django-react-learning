import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

function Message({ variant, children }) {
    return (
        <Alert variant={variant}>
            {children}
        </Alert>
    );
}

Message.propTypes = {
    variant: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};


export default Message;