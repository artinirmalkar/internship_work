import React from "react";
import "../static/Navbar.css";
import googleplaypng from "../static/images/google-play-badge.png";
import appstorepng from "../static/images/app-store-png-logo-33116.png";
import zaajiralogo from "../static/images/logo.PNG";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="Zaajiralogo">
        <img src={zaajiralogo} alt="" />
      </div>
      <div className="Employers">
        <p>EMPLOYERS</p>
      </div>
      <div className="png png1">
        <img src={googleplaypng} alt="" />
      </div>
      <div className="png png2">
        <img src={appstorepng} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
