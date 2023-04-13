import React, { useState } from "react";
import "../Main/Counter.css";
// const [Counter,setCounter]=useState({});

const Counter = () => {
  // const [scroll, setscroll] = useState(false);
  const hh = () => {
    console.log(window.scrollY, "window.screenY");
    if (window.scrollY === 800) {
      let counts = setInterval(updated, 10);
      let upto = 4800;

      function updated() {
        var count = document.getElementById("counter");
        count.innerHTML = ++upto;
        if (upto === 5000) {
          clearInterval(counts);
        }
      }
    } else {
      console.log(window, "ugiyhyhyhu");
    }
  };
  // console{}.log(window.screenY);
  // setscroll(125);
  {
    window.addEventListener("scroll", hh);
  }
  return (
    <div className="counter">
      <div className="counterItem">
        <h3 id="counter"></h3>
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
