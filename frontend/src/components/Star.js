import React from 'react';
import PropTypes from 'prop-types';

function Star({ value, gt, lt }) {
    return (
        <i className={
            value >= lt
                ? 'fas fa-star'
                : value >= gt
                    ? 'fas fa-star-half-alt'
                    : 'far fa-star'
        }
        />
    );
}

Star.propTypes = {
    value: PropTypes.string,
    gt: PropTypes.number.isRequired,
    lt: PropTypes.number.isRequired,
};


export default Star;
