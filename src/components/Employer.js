import React from "react";
import Login from "./Header/Login";
import Register from "./Header/Register";
import TopFooter from "./Footer/TopFooter";
import Footer from "./Footer/Footer";
import Banner from "./Header/Banner";
import NavBar from "./Header/NavBar";
import { NavLink } from "react-router-dom";
import Navjob from "./Header/Navjob";
const Employer = () => {
  return (
    <>
      <NavBar
        myStyle={{ borderBottom: "none" }}
        children2={<Navjob />}
      ></NavBar>
      <Banner heading="Connect with the best candidates directly,with ease!">
        <Login
          heading="Login/Sign up With a Code"
          confirmation="Don't have an account ?"
          back="Forgot Password ?"
        />
      </Banner>
      {/* <Register
        heading="REGISTER"
        confirmation="Already have an account?"
        back="Login"
      /> */}
      <TopFooter />
      <Footer />
    </>
  );
};

export default Employer;
