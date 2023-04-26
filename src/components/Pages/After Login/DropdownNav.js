import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

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
        <Dropdown.Item ><Link to="/CreateJob">CREATE</Link></Dropdown.Item>
        <Dropdown.Item ><Link to="/ViewView">VIEW</Link></Dropdown.Item>
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
        <Dropdown.Item > <Link to="/Edit">EDIT</Link></Dropdown.Item>
        <Dropdown.Item ><Link to = "/NewUser">NEW USER</Link></Dropdown.Item>
        <Dropdown.Item ><Link to = "/ViewUser">VIEW USER</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Toggle className="mx-2" variant="success" id="dropdown-basic"  style={myStyle}  >
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
