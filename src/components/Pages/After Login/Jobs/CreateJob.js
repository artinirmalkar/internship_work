import React, {useState} from 'react'
import Select from "react-select";
import MainNavbar from '../../../CommonComponent/MainNavbar'
import Footer from '../../../CommonComponent/Footer'
import './CreateJob.css'


const CreateJob = () => {
  const [selectedOptions, setSelectedOptions] = useState();
  const optionList = [
    { value: "Kenya", label: "Kenya" },
    { value: "Tanzania", label: "Tanzania" },
    { value: "Uganada", label: "Uganada" }
  ];

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  return (
   <>
    <MainNavbar/>

  <div className="formContainer">
  <div className="box"> 
  <form>
  <label htmlFor="JobTitle">Job Title*</label> <br />
  <input type="text"  placeholder='Job title'/>
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
  <label htmlFor="JobTitle">Job Description* </label> <br />
  <textarea name="JobDesc" id="" cols="48"  placeholder=' Write Job Description'></textarea>
  </div>
  </div>
  <div className="formContainer">
  <div className="box"> 
  <label htmlFor="JobTitle">Location*</label> <br />
  <div style={{display:"inline-flex", justifyContent:"space-between"}}>
  <div style={{marginRight:"5px"}}>
  <Select
            options={optionList}
            placeholder="Select Country"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            styles={{ border: "none" }}
            required 
                      />
                      </div>
                      <div >
          <Select
            options={optionList}
            placeholder="Select City"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            styles={{ border: "none" }}
            required
          />  </div>
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
            styles={{ border: "none" }}
           
          />
  </div>
  </div>
  <div className="formContainer">
  <div className="box">  <label htmlFor="JobTitle">Min. Salary/Month**</label> <br />
  <input type="number" placeholder='Min. Salary/Month**' required/> </div>
  <div className="box"> <label htmlFor="JobTitle">Max. Salary/Month*</label> <br />
  <input type="number" placeholder='Max. Salary/Month*' required/></div>
  <div className="box"> <label htmlFor="JobTitle">Type of Job*</label> <br />
  
  <Select
            options={optionList}
            placeholder="Select Job Type"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            styles={{ border: "none" }}
           required
          /></div>
  </div>
  <div className="formContainer">
  <div className="box">
  <label htmlFor="JobTitle">Job Deadline**</label> <br />
  <input type="date" placeholder='Job Deadline**' />
  </div>

  </div>
  <div style={{display:"flex", justifyContent:"center", gap:"10px"}}>
 <button>SAVE DRAFT</button>
 <button>NEXT</button>
</div>
    <Footer/>                        
   </>
  )
}

export default CreateJob
