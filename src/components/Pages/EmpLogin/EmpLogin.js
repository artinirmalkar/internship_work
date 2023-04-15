import React from "react";
import NavBar from "../../CommonComponent/NavBar";
import Login from "../../Auth/Login";
import Banner from "../../CommonComponent/Banner";
import TopFooter from "../../CommonComponent/TopFooter";
import Footer from "../../CommonComponent/Footer";
const EmpLogin = () => {
  return (
    <>
    <NavBar/>
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
