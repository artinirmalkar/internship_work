import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import MainNavbar from "../../../../CommonComponent/MainNavbar";
import BannerCard from "../../BannerCard";
import MainFooter from "../../../../CommonComponent/MainFooter";
// import "./CandidateDetails.css";
const CandidateDetails = () => {
  const [selectedOptionsExp, setSelectedOptionsExp] = useState();
  const [selectedOptionsEdu, setSelectedOptionsEdu] = useState();
  const [selectedOptionsSkills, setSelectedOptionsSkills] = useState();
  const [selectedOptionsNation, setSelectedOptionsNation] = useState();
  const [selectedOptionsGender, setSelectedOptionsGender] = useState();
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


    // // Function triggered on selection
    // function handleSelect(selectedOption) {
    //   setSelectedOption(selectedOption);
    //   // setSelectedOptions(data);
    //   console.log(selectedOption);
    // }

  // Function triggered on selection
  function handleSelectExp(data) {
    setSelectedOptionsExp(data);
    console.log("Experience:", data);
  }

  function handleSelectEdu(data) {
    setSelectedOptionsEdu(data);
    console.log("Education:", data);
  }

  function handleSelectSkills(data) {
    setSelectedOptionsSkills(data);
    console.log("Skills:", data);
  }

  function handleSelectNation(data) {
    setSelectedOptionsNation(data);
    console.log("Nationality:", data);
  }

  function handleSelectGender(data) {
    setSelectedOptionsGender(data);
    console.log("Gender:", data);
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
            value={selectedOptionsExp}
            isSearchable={true}
            styles={{ border: "none" }}
            onChange={handleSelectExp}
            isMulti
            required
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
            placeholder="Education in Years"
            value={selectedOptionsEdu}
            isSearchable={true}
            styles={{ border: "none" }}
            onChange={handleSelectEdu}
            isMulti
            required
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
            placeholder=" Skills"
            value={selectedOptionsSkills}
            isSearchable={true}
            styles={{ border: "none" }}
            onChange={handleSelectSkills}
            isMulti
            required
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
            placeholder=" Nationality"
            value={selectedOptionsNation}
            isSearchable={true}
            styles={{ border: "none" }}
            onChange={handleSelectNation}
            isMulti
            required
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
            placeholder=" Gender"
            value={selectedOptionsGender}
            isSearchable={true}
            styles={{ border: "none" }}
            onChange={handleSelectGender}
            isMulti
            required
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
