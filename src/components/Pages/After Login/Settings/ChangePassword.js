import React, { useState } from 'react'
import MainNavbar from '../../../CommonComponent/MainNavbar';
import Footer from '../../../CommonComponent/Footer';

const ChangePassword = () => {
  const [passwordVisible, setPasswordVisible]= useState(false)
  const [confirmPassVisible, setConfirmPassVisible]= useState(false)
  const handleOnClick =()=>{
    setPasswordVisible(!passwordVisible)
  }
  const handleClick =()=>{
  setConfirmPassVisible(!confirmPassVisible)
  }
  const handleOnSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <>
    <MainNavbar/>
       <div className="main" style={{margin:" 1rem", height:"45vh"}}>
        <h4>Change Password</h4>
        <hr />
        <form action="/" onSubmit={handleOnSubmit}>
        <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"start"}}>
          <div style={{margin:"1rem"}}>
             <input type={passwordVisible?"text":"password"} placeholder='New Password'  required/>
             <button onClick={handleOnClick}>{passwordVisible?"H":"s"}</button>
          </div>
          <div style={{margin:"1rem"}}>
              <input type={confirmPassVisible?"text":"password"} placeholder='Confirm Password' required/>
             <button onClick={handleClick}>{confirmPassVisible?"H":"S"}</button></div>

      
        <div style={{margin:"1rem 8rem"}}>
        <button>Change Password</button>
        </div>
        </div>
        </form>
        <hr />
       </div>
        <Footer/>
    </>
  )
}

export default ChangePassword;
