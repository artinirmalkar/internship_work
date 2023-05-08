import React from "react";
import MainNavbar from "../../../../CommonComponent/MainNavbar";
import BannerCard from "../../BannerCard";
import MainFooter from "../../../../CommonComponent/MainFooter";
import BasicDetails from "./BasicDetails";
import CandidateDetails from "./CandidateDetails";
import PricingPlansCard from "../PricingPlansCard";
import InterviewQues from "./InterviewQues";
import InterQuesDemo from "./InterQuesDemo";

const CreateJob = () => {
  return (
    <>
      <div style={{ backgroundColor: "rgb(234, 234, 234)" }} >
      <MainNavbar myStyle={{ borderBottom: "none" }} />
      <BannerCard />
      {/* <BasicDetails/> */}
      {/* <CandidateDetails/> */}
      {/* <InterviewQues /> */}
      {/* <InterQuesDemo/> */}
      <PricingPlansCard/>
      <MainFooter />
    </div>
    </>
  );
};

export default CreateJob;
