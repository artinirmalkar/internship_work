import React from "react";
import Login from "./Header/Login";
import Register from "./Header/Register";
import TopFooter from "./Footer/TopFooter";
import Footer from "./Footer/Footer";
import Banner from "./Header/Banner";
const Employer = () => {
  return (
    <>
      <Banner detail="Connect with the best candidates directly,with ease!" />
      <Login
        heading="Login/Sign up With a Code"
        confirmation="Don't have an account ?"
        back="Forgot Password ?"
      />
      <Register
        heading="REGISTER"
        confirmation="Already have an account?"
        back="Login"
      />
      <TopFooter />
      <Footer />
    </>
  );
};

export default Employer;
