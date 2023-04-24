import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../../CommonComponent/Footer";
import MainNavbar from "../../../CommonComponent/MainNavbar";
import AddUser from "./AddUser";
const NewUser = () => {
  const notify = () => toast("You don't have any plan");

  return (
    <div>
      <MainNavbar />
      <div
        className="main"
        style={{
          margin: " 1rem 2rem 0rem 2rem",
          justifyContent: "space-between"
        }}
      >
        <div
          className="title"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <h4>Create Users</h4>
          <div>
            <button onClick={notify}>ADD USER+</button>
            <ToastContainer />
          </div>
        </div>
        <hr />
      </div>

      <AddUser />
      <div
        style={{
          marginBottom: "5rem",
          width: "100vw",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <button>SUBMIT EMPLOYES</button>
      </div>
      <Footer />
    </div>
  );
};

export default NewUser;
