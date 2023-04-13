import React, { useState } from "react";
import "../Main/Counter.css";
// const [Counter,setCounter]=useState({});

const Counter = () => {
  return (
    <div className="counter">
      <div className="counterItem">
        <h3 id="counter">5K+</h3>
        <p>Candidates</p>
      </div>
      <div className="counterItem">
        <h3>2K+</h3>
        <p>Jobs</p>
      </div>
      <div className="counterItem">
        <h3>1K+</h3>
        <p>Employers</p>
      </div>
    </div>
  );
};

export default Counter;
