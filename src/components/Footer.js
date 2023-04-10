import React from "react";
import "../static/CSS/Footer.css";
import img from "../static/images/logo.PNG";
const Footer = (props) => {
  return (
    <>
      <div className="footer">
        <h1>
          Trusted by leading <br />
          companies of the world!
        </h1>
        <div className="bgfooter">
          <div className="left">
            <img src={img} alt="logo" />
            <p>
              An integrated AI talent acquisition platform, helping screen{" "}
              <br /> applicant volumes and connect relevant talent.
            </p>
          </div>
          <div className="right">
            <div className="first textalign">
              <ul>
                <li>
                  <a href="#">Employers</a>
                </li>
                <li>
                  <a href="#">Candidates</a>
                </li>
              </ul>
            </div>
            <div className="second  textalign">
              <ul>
                <li>
                  <a href="#">Login/Register</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Terms and Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="third  textalign">
              <h3>Contact</h3>
              <ul>
                <li>
                  <a href="#">reach@zaazira.com</a>
                </li>
              </ul>
             <ul>
             <li><a href="#"> <i class="fa-brands fa-twitter"></i></a></li>
             <li><a href="#"> <i class="fa-brands fa-instagram"></i> </a></li>
               <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a> </li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
