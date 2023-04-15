import React from "react";
import "./HireCandidate.css";
import { Link } from "react-router-dom";
// import Employer from "../Employer";
// import QRcode from "../DownloadSection/QRcode";

export default function HireCandidate() {
  return (
    <div>
      <div className="bannerright" data-aos="flip-right">
        <a href="#">
          <div className="Card hireacandidate ">
            <div className="cardleft ">
              <Link to="./Employer">
                <p className="I1">Hire a Candidate</p>
              </Link>
              <a href="#">
                <p className="I2">EMPLOYER</p>
              </a>
            </div>
            <div className="cardright">
              <p>
                <i class="fa-solid fa-arrow-right"></i>
              </p>
            </div>
          </div>
        </a>
        <a href="#" className="job">
          <div className="Card findajob">
            <div className="cardleft ">
              <Link to="../QRcode">
                <p className="I1">Find a Job</p>
              </Link>
              <a href="#">
                <p className="I2">CANDIDATES</p>
              </a>
            </div>
            <div className="cardright">
              <p>
                <i class="fa-solid fa-arrow-right"></i>
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
