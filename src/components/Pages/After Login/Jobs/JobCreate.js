import React from "react";
import MainNavbar from "../../../CommonComponent/MainNavbar";
import Footer from "../../../CommonComponent/Footer";
import PricingPlansCard from "./PricingPlansCard";

const JobCreate = () => {
  return (
    <div>
      <MainNavbar />

      <div>
        <p style={{ fontSize: "40px", textAlign: "center" }}>Pricing Plans</p>
      </div>
      <div style={{ width: "100%" }}>
        <PricingPlansCard
          jobs="3 Jobs per month"
          monthlyprice="TZS 102000.00"
          annualprice="TZS 1000000.00"
        />
      </div>
      <Footer />
    </div>
  );
};

export default JobCreate;
