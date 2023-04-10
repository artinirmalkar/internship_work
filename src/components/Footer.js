import React from "react";
import '../static/CSS/Footer.css'
import img from '../static/images/logo.PNG'
const Footer = (props) => {
  return (
    <div className="footer">
      <div className="left">
      <img src={img} alt="logo" />
            <p>An integrated AI talent acquisition platform, helping screen <br /> applicant volumes and connect relevant talent.</p>
      </div>
      <div className="right">
        <div className="first"></div>
        <div className="second"></div>
        <div className="third"></div>
      </div>
    </div>
  );
};

export default Footer;
