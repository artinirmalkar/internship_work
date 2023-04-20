import React from "react";
import MainNavbar from "../../CommonComponent/MainNavbar";
import Footer from "../../CommonComponent/Footer";
import Filter from "./Filter";

export default function AfterLogin() {
  return (
    <div>
      <MainNavbar />
      {/* <Searchbar /> */}
      <div>
        {/* <FilterComp /> */}
        {/* <ProfileCard /> */}
      </div>
      <Footer />
    </div>
  );
}
