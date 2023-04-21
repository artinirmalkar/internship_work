import React from "react";
import NavBar from "../../CommonComponent/NavBar";
import Banner from "../../CommonComponent/Banner";
import Register from "../../Auth/Register";
import TopFooter from "../../CommonComponent/TopFooter";
import Footer from "../../CommonComponent/Footer";
import Navjob from "../EmpLogin/Navjob";

const EmpRegister = () => {
  return (
    <>
      <NavBar children2={<Navjob />} myStyle={{ borderBottom: "none" }} />
      <Banner heading="Connect with the best candidates directly,with ease!">
        <Register
          heading="REGISTER"
          confirmation="Already have an account?"
          back="Login"
        />
      </Banner>

      <TopFooter />
      <Footer login="Login/Register" />
    </>
  );
};

export default EmpRegister;
