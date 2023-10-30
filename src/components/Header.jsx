import React from "react";
import NavBar from "./NavBar";

import './Header.css'

function Header() {
  return (
    <div className="header">
      <NavBar />

      <div className="hero__heading">
        <h1 className="hero__text">Sunflawanroses</h1>
      </div>
    </div>
  );
}

export default Header;
