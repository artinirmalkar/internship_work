import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

const DropdownNav = () => {
const myStyle={
 backgroundColor:"rgb(97, 70, 227)",
 border:"none", 
 fontWeight:"bolder"
}
  return (
    <>
    <Dropdown>
      <Dropdown.Toggle className="mx-2" variant="success" id="dropdown-basic" style={myStyle}>
      JOBS
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1">CREATE</Dropdown.Item>
        <Dropdown.Item href="#/action-2">VIEW</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <button> <Link to="/Message">Message</Link> </button>
    <Dropdown>
      <Dropdown.Toggle className="mx-2" variant="success" id="dropdown-basic" style={myStyle}>
PROFILE
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item > <Link to="/Edit">EDIT</Link></Dropdown.Item>
        <Dropdown.Item ><Link to = "/NewUser">NEW USER</Link></Dropdown.Item>
        <Dropdown.Item ><Link to = "/ViewUser">VIEW USER</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Toggle className="mx-2" variant="success" id="dropdown-basic" style={myStyle}>
  SETTINGS
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item ><Link to="/ChangePassword">CHANGE PASSWORD</Link></Dropdown.Item>
        <Dropdown.Item ><Link to ="/Landing">LOGOUT</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

   </>
  )
}

export default DropdownNav
