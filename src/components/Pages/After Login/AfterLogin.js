import React from "react";
import MainNavbar from "../../CommonComponent/MainNavbar";
import Searchbar from "./Searchbar";
import FilterComp from "./FilterComp";
import Filter from "./Filter";
import MainFooter from "../../CommonComponent/MainFooter";

export default function AfterLogin() {
  return (
    <div>
      <MainNavbar />
      {/* <Searchbar /> */}
      <div>
        <FilterComp />
        {/* <ProfileCard /> */}
      </div>
      <MainFooter />
    </div>
  );
}
