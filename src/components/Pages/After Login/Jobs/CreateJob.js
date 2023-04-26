import React from 'react'
import MainNavbar from '../../../CommonComponent/MainNavbar'
import Footer from '../../../CommonComponent/Footer'
import './CreateJob.css'
const CreateJob = () => {
  return (
   <>
    <MainNavbar/>
    <div style={{margin:"8px"}}>
        <div className='TopRow'>
<div className='TopInput'> <label htmlFor="jobtitle">Job Title*</label><input type="text" required placeholder='Job Title'/> </div>
<div className='TopInput'> <label htmlFor="jobCategory">Job Category</label><input type="text" required /> </div>
<div className='TopInput'> <label htmlFor="jobDescription">Job Description</label><textarea row={10} cols={50} placeholder='Write Job Description' required /> </div>

        </div>
        <div></div>
        <div></div>
        <div></div>
   
    </div>
    <Footer/>
   </>
  )
}

export default CreateJob
