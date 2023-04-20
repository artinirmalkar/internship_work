import React from "react";
import MainNavbar from "../../CommonComponent/MainNavbar";
import Filter from "./Filter";
import Footer from "../../CommonComponent/Footer";
import Searchbar from "./Searchbar";
export default function AfterLogin() {
  return (
    <div>
      <MainNavbar />
      {/* <Searchbar /> */}
      Welcome to After Login Landing Page
      <Filter />
      <Footer />
    </div>
  );
}
