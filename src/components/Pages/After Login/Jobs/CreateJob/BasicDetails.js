import React, {useState} from 'react'
import Select from "react-select";
import './BasicDetails.css'
import Modal from "react-bootstrap/Modal";
import MainNavbar from '../../../../CommonComponent/MainNavbar';
import BannerCard from '../../BannerCard';
import MainFooter from '../../../../CommonComponent/MainFooter';
import { Link } from 'react-router-dom';

const BasicDetails= () => {

  
  const [selectedOptions, setSelectedOptions] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 // ----------------------------------------------MyModal Component Start--------------------------------------------
const MyModal=()=>{
  return (
    <>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  <input type="text" placeholder="Enter New Description" style={{backgroundColor:"white", border:"1px solid gray", width:"100%"}}/>
  
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>
            Close
          </button>
          <button onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
  // ----------------------------------------------MyModal Component End--------------------------------------------------------------------

    const optionList = [
    { value: "Kenya", label: "Kenya" },
    { value: "Tanzania", label: "Tanzania" },
    { value: "Uganada", label: "Uganada" }
  ];

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }

const countries=[
  
    {
        name: "Select Country",
            cities: []
    },
        {
        name: "USA",
            cities: ["New York", "Los Angeles", "Chicago"]
    },
    {
        name: "Canada",
        cities: ["Toronto", "Vancouver", "Montreal"]
    },
    {
        name: "UK",
        cities: ["London", "Manchester", "Birmingham"]
    }
]

const [selectCountry, setSelectCountry]=useState("")
const [cities, setCities]=useState([])
const [selectCities, setSelectCities]=useState("")

const updateCities=(countryName)=>{
    const country = countries.find(c => c.name === countryName);
    setCities(country.cities);
}


  return (
   <>
<MainNavbar/>
<BannerCard/>
  {show && <MyModal/>}

 <div className="formContainer">
  <div className="box "> 
  <form>
  <label htmlFor="JobTitle">Job Title*</label> <br />
  <input type="text"  placeholder='Job title' required/>
 </form>  
  </div>
  <div className="box  dropdown-container">
  <form>
  <label htmlFor="JobTitle">Job Category*</label> <br />
  
  <Select
            options={optionList}
            placeholder="Job Category"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            styles={{ border: "none" }}
            required
          />
  </form>  
  </div>
  <div className="box">
  <label htmlFor="JobTitle">Job Description* </label> 
  <button onClick={handleShow} style={{marginLeft:"20px"}} required>AI Suggestions</button> <br />
  <textarea name="JobDesc" id="" cols="48"  placeholder=' Write Job Description'></textarea>
  </div>
  </div>
{/* ---------------------------------location----------------------------- */}

  <div className="formContainer">
  <div className="box "> 
  <label htmlFor="JobTitle">Location*</label> <br />
  <div style={{display:"inline-flex", justifyContent:"space-between"}}>
  <div style={{marginRight:"5px"}}>
  <select
        value={selectCountry}
        onChange={e => {
          setSelectCountry(e.target.value);
          updateCities(e.target.value);
        }}
        style={{border:"none"}}
        required
             >
             {countries.map((country, index) =>
          <option key={index} value={country.name}>
            {country.name}
          </option>
        )}
      </select>

      <select
        value={selectCities}
        onChange={e => setSelectCities(e.target.value)}
        style={{border:"none"}}
        required
             >
        <option value=""   placeholder="Selct City">Select Cities</option>
        {cities.map((city, index) =>
          <option key={index} value={city}>
            {city}
          </option>
        )}
      </select>
 </div>
     </div>
   </div>
 
  <div className="box">
  <label htmlFor="JobTitle">No. Of Vacancies*</label> <br />
  <input type="number" placeholder='Vacancies' required/>
  </div>
  <div className="box">
  <label htmlFor="JobTitle">Currency</label> <br />
  
  <Select
            options={optionList}
            placeholder="Job Category"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            styles={{ border: "none", width:"60%" }}
           
          />
  </div>
  </div>
  <div className="formContainer">
  <div className="box">  <label htmlFor="JobTitle">Min. Salary/Month**</label> <br />
  <input type="number" placeholder='Min. Salary/Month' required/> </div>
  <div className="box"> <label htmlFor="JobTitle">Max. Salary/Month*</label> <br />
  <input type="number" placeholder='Max. Salary/Month' required/></div>
  <div className="box"> <label htmlFor="JobTitle">Type of Job*</label> <br />
  
  <Select
            options={optionList}
            placeholder="Select Job Type"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            styles={{ border: "none" , width:"40%"}}
           required
          >
 </Select>
          </div>
  </div>
  <div className="formContainer">
  <div className="box">
  <label htmlFor="JobTitle">Job Deadline**</label> <br />
  <input type="date" placeholder='Job Deadline**' required/>
  </div>

  </div>
  <div style={{display:"flex", justifyContent:"center", gap:"10px"}}>
 <button>SAVE DRAFT</button>
  <Link to='/CandidateDetails'> <button>NEXT</button></Link>
</div>
      <MainFooter/>               
   </>
  )
}

export default BasicDetails
