import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Zaajiralogo from "../../static/images/logo.PNG";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <>
      <Navbar className="navbar" expand="lg" style={props.myStyle}>
        <Navbar.Brand className="navleft">
          <NavLink to="/">
            <img src={Zaajiralogo} alt="" />
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navcenter">
            <NavLink to="/EmpLogin" className=" navcenter employes">
              {props.firstelement}
            </NavLink>
            {props.children1}
            {props.children2}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavBar;
