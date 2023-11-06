import React, { useState } from 'react';
import './PhotoAll.css';

import img2 from '../assets/IMG-2.jpg';
import img3 from '../assets/IMG-3.jpg';
import img4 from '../assets/IMG-4.jpg';
import img5 from '../assets/IMG-5.jpg';

function PhotoAll() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handlePreviewClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="photos__section">
        <div className="item item__1" onClick={() => handleImageClick(img2)}>
          <img className='photo__img' src={img2} alt="Two Black Boys hugging" />
        </div>
        <div className="item item__2" onClick={() => handleImageClick(img5)}>
          <img src={img5} alt="Test" className="photo__img" />
        </div>
        <div className="item item__3" onClick={() => handleImageClick(img3)}>
          <img src={img3} alt="Test" className="photo__img" />
        </div>
        <div className="item item__4" onClick={() => handleImageClick(img4)}>
          <img src={img4} alt="Test" className="photo__img" />
        </div>
      </div>

      {selectedImage && (
        <div className="imagePreview">
          <button onClick={handlePreviewClose}>Close Preview</button>
          <img src={selectedImage} alt="Preview" />
        </div>
      )}
    </>
  );
}

export default PhotoAll;
