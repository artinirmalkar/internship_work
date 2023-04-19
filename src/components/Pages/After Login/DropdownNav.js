import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const DropdownNav = (props) => {
const myStyle={
 backgroundColor:"rgb(97, 70, 227)",
 border:"none", 
 fontWeight:"bolder"
}
  return (
    <>
    <Dropdown>
      <Dropdown.Toggle className="mx-2" variant="success" id="dropdown-basic" style={myStyle}>
       {props.name}
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1">{props.value1}</Dropdown.Item>
        <Dropdown.Item href="#/action-2">{props.value2}</Dropdown.Item>
        <Dropdown.Item href="#/action-3">{props.value3}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

   </>
  )
}

export default DropdownNav
