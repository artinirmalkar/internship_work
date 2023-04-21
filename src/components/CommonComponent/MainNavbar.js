import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import DropdownNav from "../Pages/After Login/DropdownNav";
import Zaajiralogo from "../../static/images/logo.PNG";

const NavBar = (props) => {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand className="navleft">
          <NavLink to="/AfterLogin">
            <img src={Zaajiralogo} alt="" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navcenter ">
            <DropdownNav name="JOBS" value1="CREATE" value2="VIEW" />
            <button
              className="btn btn-secondary "
              type="button"
              aria-expanded="false"
              style={{
                backgroundColor: "rgb(97, 70, 227)",
                border: "none",
                fontWeight: "bolder",
              }}
            >
              Message{" "}
            </button>
            <DropdownNav
              name="PROFILE"
              value1="EDIT"
              value2="NEW USER"
              value3="VIEW USERS"
            />
            <DropdownNav
              name="SETTING"
              value1="CREATE PASSWORD"
              value2="LOGOUT"
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavBar;
