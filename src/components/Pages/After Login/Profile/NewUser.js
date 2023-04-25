import React, { useState } from "react";
import MainNavbar from "../../../CommonComponent/MainNavbar";
import AddUser from "./AddUser";
import ToastContainer from "../ToastContainer";
import Footer from "../../../CommonComponent/Footer";
const NewUser = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);

    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };
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
            {isVisible && <ToastContainer message="You don't have any plan" />}
            <button onClick={handleClick}>ADD USER+</button>
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
