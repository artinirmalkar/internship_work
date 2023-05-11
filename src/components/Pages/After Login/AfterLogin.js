import React from "react";
import MainNavbar from "../../CommonComponent/MainNavbar";
import Searchbar from "./Searchbar";
import FilterComp from "./FilterComp";
import Filter from "./Filter";
import MainFooter from "../../CommonComponent/MainFooter";
import ChangePassword from "./Settings/ChangePassword";
import NewUser from "./Profile/NewUser";
import ViewUser from "./Profile/ViewUser";
import CreateJob from "./Jobs/CreateJob/CreateJob";

export default function AfterLogin() {
  return (
    <div>
      {/* <MainNavbar /> */}

      {/* <Searchbar /> */}
      <CreateJob />

      {/* <MainFooter /> */}
    </div>
  );
}
