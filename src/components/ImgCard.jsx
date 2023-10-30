import React from 'react'

import './ImgCard.css'

function ImgCard({src, alt, imgTitle, dimension}) {
  return (
    <div className='img__card-wrapper'>
        <img className='img__card-img' src={src} alt={alt} />
        {/* <div className="img__card">

        </div> */}
      <h3 className="img__title">{imgTitle}</h3>
      <span className="img__dimension">{dimension}</span>
    </div>
  )
}

export default ImgCard
