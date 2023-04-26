import React, { useState } from 'react'
import './ChangePassword.css'
import MainNavbar from '../../../CommonComponent/MainNavbar';
import MainFooter from '../../../CommonComponent/MainFooter';
import ToastContainer from '../ToastContainer';


const ChangePassword = () => {
  const[showToast, setShowToast]=useState(false)
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


const handleChangePass=()=>{
 setShowToast(true)
}

  return (
    <>
       { showToast ? <ToastContainer message="Fill the correct fields"/> :" "}
    <MainNavbar/>
       <div className="main" >
        <h4>Change Password</h4>
        <hr />
        <form action="/" onSubmit={handleOnSubmit}>
        <div className='form' >
          <div className='inputArea'>
             <input type={passwordVisible?"text":"password"} placeholder='New Password'  required/>
     
             <button
                onClick={handleOnClick}
              style={{
               
                paddingBlock: "0px",
                backgroundColor: "transparent",
                marginLeft: "-40px",
                padding: "0px"
              }}
            >
              {passwordVisible ? (
                <i
                  class="fa-solid fa-eye"
                  style={{ color: "rgb(97, 70, 227)" }}
                />
              ) : (
                <i
                  class="fa-solid fa-eye-slash"
                  style={{ color: "rgb(97, 70, 227)" }}
                />
              )}
            </button>
          </div>
          <div className='inputArea'>
              <input type={confirmPassVisible?"text":"password"} placeholder='Confirm Password' required/>
       
             <button
            
              onClick={handleClick}
              style={{
                marginLeft: "-40px",
                  padding: "0px",
                paddingBlock: "0px",
                backgroundColor: "transparent",
                
              }}
            >
             {confirmPassVisible ? (
                <i
                  class="fa-solid fa-eye"
                  style={{ color: "rgb(97, 70, 227)" }}
                />
              ) : (
                <i
                  class="fa-solid fa-eye-slash"
                  style={{ color: "rgb(97, 70, 227)" }}
                />
              )}
            </button>
             </div>

      
        <div style={{margin:"1rem 8rem"}}>
    
       <button onClick={handleChangePass}>Change Password</button>
        </div>
        </div>
        </form>
        <hr />
       </div>
              
<MainFooter/>
    </>
  )
}
export default ChangePassword;
