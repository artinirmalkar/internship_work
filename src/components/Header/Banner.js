import React, { useEffect } from "react";
import "./Banner.css";
import Aos from "aos";
import "aos/dist/aos.css";
import HireCandidate from "./HireCandidate";

const Banner = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="banner" data-aos="fade-in">
      <div className="bannerleft">
        <p>{props.heading}</p>
      </div>

      {/* <HireCandidate /> */}
      {props.children}

      {/* <div className="bannerright" data-aos="flip-right">
        <a href="#">
          <div className="Card hireacandidate ">
            <div className="cardleft ">
              <a href="#">
                <p className="I1">Hire a Candidate</p>
              </a>
              <a href="#">
                <p className="I2">EMPLOYER</p>
              </a>
            </div>
            <div className="cardright">
              <p>
                <i class="fa-solid fa-arrow-right" />
              </p>
            </div>
          </div>
        </a>
        <a href="#" className="job">
          <div className="Card findajob">
            <div className="cardleft ">
              <a href="#">
                <p className="I1">Find a Job</p>
              </a>
              <a href="#">
                <p className="I2">CANDIDATES</p>
              </a>
            </div>
            <div className="cardright">
              <p>
                <i class="fa-solid fa-arrow-right" />
              </p>
            </div>
          </div>
        </a>
      </div> */}
    </div>
  );
};

export default Banner;
