import React, { useState } from 'react';
import './PhotoAll.css';

import img2 from '../assets/IMG-2.jpg';
import img3 from '../assets/IMG-3.jpg';
import img4 from '../assets/IMG-4.jpg';
import img5 from '../assets/IMG-5.jpg';

function PhotoAll() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handlePreviewClose = () => {
    setSelectedImage(null);
  };

  const handleMoreInfoClick = () => {
    setShowMoreInfo(!showMoreInfo);
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
          {/* <button onClick={handlePreviewClose}>Close Preview</button> */}

          {/* More Info Button */}
          {/* <button className="more-info__button" onClick={handleMoreInfoClick}>
            More Info
          </button> */}

          <div className="image-preview__icons">

            <div className="cancel__svg" onClick={handlePreviewClose}>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path d="M7.30957 8.03125L17.2086 17.9302L27.1075 8.03125" stroke="#E5E7EB" stroke-width="2.82828" stroke-linecap="round" />
                <path d="M7.30957 27.8287L17.2086 17.9297L27.1075 27.8287" stroke="#E5E7EB" stroke-width="2.82828" stroke-linecap="round" />
              </svg>
            </div>
            <div className="more-info__button" onClick={handleMoreInfoClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path d="M19.8095 25.245C19.8011 25.2478 19.019 25.508 18.3402 25.508C17.9655 25.508 17.8142 25.4302 17.7661 25.3963C17.5285 25.2308 17.0873 24.9211 17.8425 23.4165L19.2566 20.5967C20.0952 18.9223 20.2196 17.3031 19.6031 16.0361C19.0996 14.9995 18.1338 14.2882 16.8879 14.0337C16.4421 13.9424 15.9882 13.8965 15.5332 13.8965C12.9184 13.8965 11.1578 15.4238 11.0843 15.4888C10.9615 15.597 10.8801 15.7445 10.8539 15.906C10.8276 16.0675 10.8583 16.2332 10.9405 16.3746C11.0228 16.5161 11.1516 16.6247 11.3049 16.6818C11.4583 16.739 11.6267 16.7412 11.7815 16.688C11.7885 16.6852 12.572 16.4236 13.2508 16.4236C13.6227 16.4236 13.7726 16.5013 13.8192 16.5339C14.0582 16.7007 14.5009 17.0147 13.7471 18.5165L12.333 21.3377C11.493 23.0134 11.3699 24.6326 11.9865 25.8983C12.4899 26.9349 13.4544 27.6462 14.7031 27.9007C15.1471 27.9898 15.6025 28.0379 16.0522 28.0379C18.6683 28.0379 20.4303 26.5106 20.5039 26.4456C20.6268 26.3376 20.7084 26.1904 20.7349 26.029C20.7614 25.8676 20.7312 25.702 20.6493 25.5604C20.5674 25.4188 20.439 25.31 20.2858 25.2525C20.1327 25.1949 19.9644 25.1923 19.8095 25.245Z" fill="#E5E7EB" />
                <path d="M18.6232 12.4857C20.5758 12.4857 22.1586 10.9029 22.1586 8.95039C22.1586 6.99787 20.5758 5.41504 18.6232 5.41504C16.6707 5.41504 15.0879 6.99787 15.0879 8.95039C15.0879 10.9029 16.6707 12.4857 18.6232 12.4857Z" fill="#E5E7EB" />
              </svg>
            </div>

          </div>

          <img src={selectedImage} alt="Preview" />


          {/* More Info Section */}
          {showMoreInfo && (
            <div className="more-info__section">
              {/* Add your more information content here */}
              <h3 className="more-info__section--heading">
                Golden Sunset Over Lagos
              </h3>
              <p className='more-info__section--paragraph'>This photograph captures the breathtaking beauty of a golden sunset over Lagos, Nigeria. The vibrant hues of orange and gold paint the sky as the sun dips below the horizon, casting a warm and tranquil glow over the cityscape. The contrast between the silhouetted buildings and the radiant sky creates a captivating visual narrative of the city's dynamic energy and the serene moments it offers.</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default PhotoAll;
