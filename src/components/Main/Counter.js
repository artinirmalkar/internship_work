import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "../Main/Counter.css";
import Aos from "aos";
import "aos/dist/aos.css";

// const [Counter,setCounter]=useState({});

const Counter = () => {
  const [CounterOn, setCounterOn] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  // const hh = () => {
  //   console.log(window.scrollY, "window.screenY");
  //   if (window.scrollY === 800) {
  //     let counts = setInterval(updated, 10);
  //     let upto = 4800;

  //     function updated() {
  //       var count = document.getElementById("counter");
  //       count.innerHTML = ++upto;
  //       if (upto === 5000) {
  //         clearInterval(counts);
  //       }
  //     }
  //   } else {
  //     console.log(window, "ugiyhyhyhu");
  //   }
  // };
  // console{}.log(window.screenY);
  // setscroll(125);
  // {
  //   window.addEventListener("scroll", hh);
  // }
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      OnExit={() => setCounterOn(false)}
    >
      <div className="counter" data-aos="fade-up">
        <div className="counterItem">
          <h3 id="counter">
            {CounterOn && (
              <CountUp start={4800} end={5000} duration={4} delay={0} />
            )}
            +
          </h3>
          <p>Candidates</p>
        </div>
        <div className="counterItem">
          <h3>
            {CounterOn && (
              <CountUp start={200} end={300} duration={4} delay={0} />
            )}
            +
          </h3>
          <p>Jobs</p>
        </div>
        <div className="counterItem">
          <h3>
            {CounterOn && (
              <CountUp start={500} end={600} duration={4} delay={0} />
            )}
            +
          </h3>
          <p>Employers</p>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
