import React from 'react';
import './Image.css'

function Image({imgSrc, imgAlt}) {
  return (
      <img className='image' src={imgSrc} alt={imgAlt} />
  )
}

export default Image
