import React from 'react'

function Star({ value, gt, lt }) {
  return (
    <i className={
      value >= lt
        ? 'fas fa-star'
        : value >= gt
          ? 'fas fa-star-half-alt'
          : 'far fa-star'
    }>
    </i>
  )
}

export default Star