import React from "react";
import "./Footer.css";
import image from "../../static/images/logo.PNG";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer row mright">
      <div className="first textalign col-md-6">
        <img src={image} alt="logo" />
        <p>
          An integrated AI talent acquisition platform, helping screen <br />
          applicant volumes and connect relevant talent.
        </p>
      </div>
      <div className="second textalign col-md-3 col-lg-2">
        <ul>
          <li>
            <Link to="/Employers">Employers</Link>
          </li>
          <li>
            <a href="#">Candidates</a>
          </li>
        </ul>
      </div>
      <div className="third textalign col-md-3 col-lg-2">
        <ul>
          <li>
            <a href="#">Login/Register</a>
          </li>
          <li>
            <a href="#">Supports</a>
          </li>
          <li>
            <Link to="/TermsAndCondition">Terms & Conditions</Link>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="forth textalign col-md-3 col-lg-2">
        <ul>
          <h3>Contact</h3>
          <li>
            <a href="#">reach@zaajira.com</a>
          </li>
        </ul>
        <ul className="icon">
          <li>
            <a href="https://twitter.com/zaajira">
              <i class="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/zaajira.app/">
              <i class="fa-brands fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQGbakPG3i0P6AAAAYeD7p3QgyRNjqVbMYeBELNJ1ErW32hPc_DP6mcZ2wSQmtq1bMIMiSyP_bVPP9U739PQSp9UE-bITI_6RePBd4FH3n_tfWBhlBAHu-Lb9aaboJWwexIlYws=&original_referer=https://zaajira.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fzaajira">
              <i class="fa-brands fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
