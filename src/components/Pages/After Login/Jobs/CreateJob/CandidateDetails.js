import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import MainNavbar from "../../../../CommonComponent/MainNavbar";
import BannerCard from "../../BannerCard";
import MainFooter from "../../../../CommonComponent/MainFooter";
// import "./CandidateDetails.css";
const CandidateDetails = () => {
  const [selectedOptions, setSelectedOptions] = useState();

  const optionListExp = [
    { value: "0-1", label: "0-1" },
    { value: "2-3", label: "2-3" },
    { value: "4-5", label: "4-5" },
    { value: "6-7", label: "6-7" },
    { value: "8-9", label: "8-9" },
    { value: "10+", label: "10+" }
  ];
  const optionListEdu = [
    { value: "0-1", label: "0-1" },
    { value: "2-3", label: "2-3" },
    { value: "4-5", label: "4-5" },
    { value: "6-7", label: "6-7" },
    { value: "8-9", label: "8-9" },
    { value: "10+", label: "10+" }
  ];
  const optionListSkills = [
    { value: "0-1", label: "0-1" },
    { value: "2-3", label: "2-3" },
    { value: "4-5", label: "4-5" },
    { value: "6-7", label: "6-7" },
    { value: "8-9", label: "8-9" },
    { value: "10+", label: "10+" }
  ];
  const optionListNation = [
    { value: "0-1", label: "0-1" },
    { value: "2-3", label: "2-3" },
    { value: "4-5", label: "4-5" },
    { value: "6-7", label: "6-7" },
    { value: "8-9", label: "8-9" },
    { value: "10+", label: "10+" }
  ];
  const optionListGender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" }
  ];

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  return (
    <>
<MainNavbar/>
<BannerCard/>
    <div
      className="form-container"
      style={{
        backgroundColor: "white",
        margin: "3rem",
        border: "1px solid #d0dae6",
        borderRadius: "8px"
      }}
    >
      <div style={{ padding: " 10px 0px 0px 20px" }}>
        <h4>Candidate Details</h4>
      </div>
      <hr />
      <div className="box  dropdown-container">
        <form>
          <label htmlFor="JobTitle" style={{ fontWeight: "bolder" }}>
            Experience *
          </label>{" "}
          <br />
          <Select
            options={optionListExp}
            placeholder="Experience in Years"
            value={selectedOptions}
            isSearchable={true}
            styles={{ border: "none" }}
          />
        </form>
      </div>
      <div className="box  dropdown-container">
        <form>
          <label htmlFor="JobTitle" style={{ fontWeight: "bolder" }}>
            Education
          </label>{" "}
          <br />
          <Select
            options={optionListEdu}
            placeholder="Education"
            isSearchable={true}
            styles={{ border: "none" }}
            isMulti
          />
        </form>
      </div>
      <div className="box  dropdown-container">
        <form>
          <label htmlFor="JobTitle" style={{ fontWeight: "bolder" }}>
            Skills *
          </label>{" "}
          <br />
          <Select
            options={optionListSkills}
            placeholder="Select Skills"
            value={selectedOptions}
            isSearchable={true}
            styles={{ border: "none" }}
            required
            isMulti
          />
        </form>
      </div>
      <div className="box  dropdown-container">
        <form>
          <label htmlFor="JobTitle" style={{ fontWeight: "bolder" }}>
            Nationality
          </label>{" "}
          <br />
          <Select
            options={optionListNation}
            placeholder="Select Nationality"
            value={selectedOptions}
            isSearchable={true}
            styles={{ border: "none" }}
          />
        </form>
      </div>
      <div className="box  dropdown-container">
        <form>
          <label htmlFor="JobTitle" style={{ fontWeight: "bolder" }}>
            Gender
          </label>{" "}
          <br />
          <Select
            options={optionListGender}
            placeholder="Select Gender"
            value={selectedOptions}
            isSearchable={true}
            styles={{ border: "none" }}
          />
        </form>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      <Link to='/BasicDetails'>   <button>BACK</button></Link>
        <button>SAVE DRAFT</button>
      <Link to='/InterviewQues'> <button>NEXT</button></Link> 
      </div>
    </div>
    <MainFooter/>
    </>
  );
};

export default CandidateDetails;
