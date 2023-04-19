import React, { useEffect } from "react";
import "./Banner.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="banner" data-aos="fade-in">
      <div className="bannerleft">
        <p>{props.heading}</p>
      </div>

      {props.children}
    </div>
  );
};

export default Banner;
