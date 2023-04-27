import React from "react";
import './BannerCard.css'
const BannerCard = () => {
  return (
  <>
  <div className="TopSection">  
 
  <div className="mainsection">
    <div className="MyTab mt-3 d-flex justify-content-left">
          
        <div className="MyTabText p-4 w-25 px-auto text-center font-weight-bold">
            1
        </div>
        <span className="MyTabDetail font-weight-bold m-auto text-white">
            Basic Details
        </span>
    </div>
    <div className="MyTab mt-3 d-flex justify-content-left">
          
        <div className="MyTabText p-4 w-25 px-auto text-center font-weight-bold">
            2
        </div>
        <span className="MyTabDetail font-weight-bold m-auto text-muted">
            Candidate Details
        </span>
    </div>
    <div className="MyTab mt-3 d-flex justify-content-left">
          
        <div className="MyTabText p-4 w-25 px-auto text-center font-weight-bold">
            3
        </div>
        <span className="MyTabDetail font-weight-bold m-auto text-muted">
     Interview Questions
        </span>
    </div>
    <div className="MyTab mt-3 d-flex justify-content-left">
          
        <div className="MyTabText p-4 w-25 px-auto text-center font-weight-bold">
            4
        </div>
        <span className="MyTabDetail font-weight-bold m-auto text-muted">
    Review/Suggestions
        </span>
    </div>
    
    </div>
    </div>

  </>
  );
};

export default BannerCard;
