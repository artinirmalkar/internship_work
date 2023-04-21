import React from "react";
import NavBar from "../../CommonComponent/NavBar";
import Login from "../../Auth/Login";
import Navjob from "./Navjob";
import Banner from "../../CommonComponent/Banner";
import TopFooter from "../../CommonComponent/TopFooter";
import Footer from "../../CommonComponent/Footer";
const EmpLogin = () => {
  return (
    <>
      <NavBar children2={<Navjob />} myStyle={{ borderBottom: "none" }} />
      <Banner heading="Connect with the best candidates directly,with ease!">
        <Login
          heading="Login/Sign up With a Code"
          confirmation="Don't have an account ?"
          back="Forgot Password ?"
        />
      </Banner>

      <TopFooter />
      <Footer login="Login/Register" />
    </>
  );
};

export default EmpLogin;
