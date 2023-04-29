import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DropdownNav from "../Pages/After Login/DropdownNav";
import Zaajiralogo from "../../static/images/logo.PNG";

const MainNavbar = (props) => {
  
  return (
    <>
      <Navbar className="navbar" expand="lg" style={props.myStyle}>
        <Navbar.Brand className="navleft">
          <NavLink to="/AfterLogin">
            <img src={Zaajiralogo} alt="" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navcenter ">
            <DropdownNav />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default MainNavbar;
