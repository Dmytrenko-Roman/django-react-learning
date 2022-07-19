import React from 'react';
import { Spinner } from 'react-bootstrap';

function Loader() {
    return (
        <Spinner
            animation='border'
            roll='status'
            style={{
                height: '100px',
                width: '100px',
                margin: 'auto',
                display: 'block',
            }}
        />
    );
}

export default Loader;