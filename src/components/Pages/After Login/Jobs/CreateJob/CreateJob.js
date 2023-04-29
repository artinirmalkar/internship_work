import React from 'react'
import MainNavbar from '../../../../CommonComponent/MainNavbar'
import BannerCard from '../../BannerCard'
import MainFooter from '../../../../CommonComponent/MainFooter'
import BasicDetails from './BasicDetails'
import CandidateDetails from './CandidateDetails'
import PricingPlansCard from '../PricingPlansCard'
import InterviewQues from './InterviewQues'


const CreateJob = () => {
  return (
   <>
   <MainNavbar myStyle={{ borderBottom: "none" }}/>
   <BannerCard/>
    {/* <BasicDetails/> */}
    <CandidateDetails/>
    {/* <InterviewQues/> */}
     {/* <PricingPlansCard/> */}
    <MainFooter/>
   </>
  )
}

export default CreateJob
