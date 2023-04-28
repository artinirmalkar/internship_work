import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import './DropdownNav.css'
const DropdownNav = () => {
const myStyle={
 backgroundColor:"rgb(97, 70, 227)",
 border:"none", 
 fontWeight:"bolder",
 paddingInline:"3rem"
}
  return (
    <>
    <Dropdown>
      <Dropdown.Toggle className="mx-2" variant="success" id="dropdown-basic" style={myStyle}>
      JOBS
      </Dropdown.Toggle>

      <Dropdown.Menu >
      <Link to="/CreateJob"> <Dropdown.Item className="dropdown-item" href='/CreateJob'>CREATE</Dropdown.Item></Link>
      <Link to="/JobView"><Dropdown.Item className="dropdown-item" href='/View'>VIEW</Dropdown.Item></Link>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown className="mx-2" variant="success" id="dropdown-basic" >
    <Link to="/Messages" style={{color:"white", fontWeight:"bolder", paddingInline:"2rem"}}>MESSAGES</Link>
      </Dropdown>
   
    <Dropdown>
      <Dropdown.Toggle className="mx-2" variant="success" id="dropdown-basic" style={myStyle}>
PROFILE
      </Dropdown.Toggle>
  
      <Dropdown.Menu >
      <Link to="/Edit"> <Dropdown.Item  className="dropdown-item" href='/Edit'> EDIT</Dropdown.Item></Link>
      <Link to = "/NewUser"> <Dropdown.Item  className="dropdown-item" href='/NewUser'>NEW USER</Dropdown.Item></Link>
      <Link to = "/ViewUser">  <Dropdown.Item  className="dropdown-item" href='/ViewUser'>VIEW USER</Dropdown.Item></Link>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Toggle className="mx-2" variant="success" id="dropdown-basic"  style={myStyle}  >
  SETTINGS
      </Dropdown.Toggle>

      <Dropdown.Menu >
      <Link to="/ChangePassword"> <Dropdown.Item  className="dropdown-item" href='/ChangePassword'>CHANGE PASSWORD</Dropdown.Item></Link>
        <Link to ="/Landing">   <Dropdown.Item  className="dropdown-item" href='ChangePassword'>LOGOUT</Dropdown.Item></Link>
      </Dropdown.Menu>
    </Dropdown>

   </>
  )
}

export default DropdownNav
