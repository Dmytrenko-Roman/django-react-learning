import React from 'react'

function Star({ color, value, gt, lt}) {
  return (
    <i style={{color}} className={
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