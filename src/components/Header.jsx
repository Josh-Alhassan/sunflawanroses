import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "./Header.css";

import img1 from "../assets/IMG_9659.jpg"
import img2 from "../assets/IMG-2.jpg"
import img3 from "../assets/IMG-3.jpg"
import img4 from "../assets/IMG-4.jpg"
import img5 from "../assets/this.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5
];

function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to update the current image index
  const updateImageIndex = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Use useEffect to set up the interval for automatic sliding
  useEffect(() => {
    const intervalId = setInterval(updateImageIndex, 5000); // Change 5000 to the desired interval in milliseconds

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="header">
      <NavBar />

      <div className="hero__heading">
        <h1 className="hero__text">Sunflawanroses</h1>
      </div>

      {/* Display the current image */}
      <img
        className="hero__image"
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
      />
      <div className="hero__overlay"></div>
    </div>
  );
}

export default Header;
