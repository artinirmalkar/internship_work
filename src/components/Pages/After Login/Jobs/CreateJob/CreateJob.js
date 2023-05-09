import React from "react";
import MainNavbar from "../../../../CommonComponent/MainNavbar";
import BannerCard from "../../BannerCard";
import MainFooter from "../../../../CommonComponent/MainFooter";
import PricingPlansCard from "../PricingPlansCard";

const CreateJob = () => {
  return (
    <>
      <div style={{ backgroundColor: "rgb(234, 234, 234)" }} >
      <MainNavbar myStyle={{ borderBottom: "none" }} />
      <BannerCard />
      <PricingPlansCard/>
      <MainFooter />
    </div>
    </>
  );
};

export default CreateJob;
