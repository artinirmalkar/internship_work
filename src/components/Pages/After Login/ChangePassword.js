import React from 'react'

const ChangePassword = () => {
  return (
    <>
       <div className="main" style={{margin:" 1rem 2rem"}}>
        <h4>Change Password</h4>
        <hr />
        <form style={{display:"flex", flexWrap:"wrap"}}>
            <input type="password" placeholder='New Password' required style={{flexBasis:"28vw", marginRight:"2rem", border:"none", paddingBlock:"5px", backgroundColor:"rgb(234, 234, 234)"}}/>
            <input type="password" placeholder='Confirm Password'  required style={{flexBasis:"28vw", marginRight:"2rem", border:"none", paddingBlock:"5px", backgroundColor:"rgb(234, 234, 234)"}}/>
            <button >CHANGE PASSWORD</button>
        </form>
        <hr />
       </div>
    </>
  )
}

export default ChangePassword;
