import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Counter.css";

const Counter = () => {
  const [CounterOn, setCounterOn] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      OnExit={() => setCounterOn(false)}
    >
      <div className="counter" data-aos="fade-up">
        <div className="counterItem">
          <h3 id="counter">
            {CounterOn &&
              <CountUp start={4800} end={5000} duration={4} delay={0} />}
            +
          </h3>
          <p>Candidates</p>
        </div>
        <div className="counterItem">
          <h3>
            {CounterOn &&
              <CountUp start={100} end={300} duration={4} delay={0} />}
            +
          </h3>
          <p>Jobs</p>
        </div>
        <div className="counterItem">
          <h3>
            {CounterOn &&
              <CountUp start={400} end={600} duration={4} delay={0} />}
            +
          </h3>
          <p>Employers</p>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
