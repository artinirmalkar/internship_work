import React, { useState } from "react";
import MainNavbar from "../../../CommonComponent/MainNavbar";
import AddUser from "./AddUser";
import Footer from "../../../CommonComponent/Footer";
const NewUser = () => {
  return (
    <div>
      <MainNavbar />
      <AddUser />

      <Footer />
    </div>
  );
};

export default NewUser;
