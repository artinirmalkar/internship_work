import React from 'react'
import MainNavbar from '../../../CommonComponent/MainNavbar';
import Footer from '../../../CommonComponent/Footer';

const ChangePassword = () => {
  return (
    <>
    <MainNavbar/>
       <div className="main" style={{margin:" 2rem 2rem 9rem 2rem"}}>
        <h4>Change Password</h4>
        <hr />
        <form style={{display:"flex", flexWrap:"wrap"}}>
            <input type="password" placeholder='New Password' required style={{flexBasis:"28vw", marginRight:"2rem", border:"none", paddingBlock:"5px", backgroundColor:"rgb(234, 234, 234)"}}/>
            <input type="password" placeholder='Confirm Password'  required style={{flexBasis:"28vw", marginRight:"2rem", border:"none", paddingBlock:"5px", backgroundColor:"rgb(234, 234, 234)"}}/>
            <button >CHANGE PASSWORD</button>
        </form>
        <hr />
       </div>
        <Footer/>
    </>
  )
}

export default ChangePassword;
