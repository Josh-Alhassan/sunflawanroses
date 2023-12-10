import React from 'react'
import HeaderTitle from '../components/HeaderTitle'

import './Gallery.css'
import ImgCard from '../components/ImgCard'

// Image Imports
import img2 from '../assets/IMG-2.jpg'
import img3 from '../assets/IMG-3.jpg'
import img4 from '../assets/IMG-4.jpg'
import img5 from '../assets/IMG-5.jpg'
import img6 from '../assets/this.jpg';
import img7 from '../assets/IMG_9659.jpg';

function Gallery() {
  return (
    <div className='gallery' id='gallery'>
        <HeaderTitle /> 

        <div className="gallery-img__wrapper">
          <ImgCard src={img3} alt= "Female Model walking" imgTitle= "Photo Name" dimension= "Dimensions" />
          <ImgCard src={img2} alt= "Two african boys hugging" imgTitle= "Photo Name" dimension= "Dimensions" />
          <ImgCard src={img4} alt= "X - O card game" imgTitle= "Photo Name" dimension= "Dimensions" />
          <ImgCard src={img5} alt= "Female in African Festival Costume" imgTitle= "Photo Name" dimension= "Dimensions" />

          <ImgCard src={img6} alt= "Female in African Festival Costume" imgTitle= "Photo Name" dimension= "Dimensions" />
          <ImgCard src={img7} alt= "X - O card game" imgTitle= "Photo Name" dimension= "Dimensions" />
          <ImgCard src={img4} alt= "Two african boys hugging" imgTitle= "Photo Name" dimension= "Dimensions" />
          <ImgCard src={img3} alt= "Female Model walking" imgTitle= "Photo Name" dimension= "Dimensions" />
        </div>

    </div>
  )
}

export default Gallery
