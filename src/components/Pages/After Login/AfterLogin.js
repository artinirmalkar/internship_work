import React from "react";
import MainNavbar from "../../CommonComponent/MainNavbar";
import Searchbar from "./Searchbar";
import FilterComp from "./FilterComp";
import Filter from "./Filter";
import MainFooter from "../../CommonComponent/MainFooter";
import ChangePassword from "./ChangePassword";
import NewUser from "./NewUser";
import ViewUser from "./ViewUser";

export default function AfterLogin() {
  return (
    <div>
      <MainNavbar />
      {/* <Searchbar /> */}
      {/* <ChangePassword /> */}
      <NewUser />
      <ViewUser />
      {/* <FilterComp /> */}
      {/* <ProfileCard /> */}

      <MainFooter />
    </div>
  );
}
