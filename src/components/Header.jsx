import React from "react";
import "./css/header.css";
const Header = () => {
  return (
    <div className="header-container">
      <figure>
        <img
          src="../../imgs/header.png"
          alt="image rick and morty in a portal"
        />
      </figure>

      <h1>Rick And Morty WIKI</h1>
    </div>
  );
};

export default Header;
