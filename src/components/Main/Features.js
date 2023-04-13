import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="feature">
      <div className="feature-left">
        <p className="zaajira-text">Why Apply On Zaajira ?</p>
        <p className="zaajira-text-bottom">
          Feature that supercharge your job search and profile
        </p>
      </div>
      <div className="feature-right">
        <div className="feature-content feature-content1">
          <i class="fa-regular fa-circle-check"></i>
          <p>Connect with top employers in minutes</p>
        </div>
        <div className="feature-content feature-content2">
          <i class="fa-regular fa-circle-check"></i>
          <p>Increase your chances with custom cards</p>
        </div>
        <div className="feature-content">
          <i class="fa-regular fa-circle-check"></i>
          <p>Browse specific jobs with detailed requirements</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
