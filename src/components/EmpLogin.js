import React from "react";
import Login from "./Header/Login";
import TopFooter from "./Footer/TopFooter";
import Footer from "./Footer/Footer";
import Banner from "./Header/Banner";
const EmpLogin = () => {
  return (
    <>
      <Banner heading="Connect with the best candidates directly,with ease!">
        <Login
          heading="Login/Sign up With a Code"
          confirmation="Don't have an account ?"
          back="Forgot Password ?"
        />
      </Banner>
      
      <TopFooter />
      <Footer />
    </>
  );
};

export default EmpLogin;
