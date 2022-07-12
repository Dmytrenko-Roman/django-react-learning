import React from 'react'

import Star from './Star'

function Rating({ value, text }) {
  return (
    <div className='rating'>
      <span>
        <Star value={value} lt={1} gt={0.5} />
        <Star value={value} lt={2} gt={1.5} />
        <Star value={value} lt={3} gt={2.5} />
        <Star value={value} lt={4} gt={3.5} />
        <Star value={value} lt={5} gt={4.5} />
      </span>
      <span>{text && text}</span>
    </div>
  )
}

export default Rating