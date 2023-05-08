import React from "react";
import Header from "../../../../Redux/components/Header";
import Cart from "../../../../Redux/components/Cart";
import Footer from "../../../CommonComponent/Footer";
import Main from "../../../../Redux/components/Main";

const JobView = () => {
  return (
    <div>
      <Header />
      {/* <Cart /> */}
      <Main />
      <Footer />
    </div>
  );
};

export default JobView;
