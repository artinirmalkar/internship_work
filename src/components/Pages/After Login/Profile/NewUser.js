import React, { useState } from "react";
import MainNavbar from "../../../CommonComponent/MainNavbar";
import AddUser from "./AddUser";
import ToastContainer from "../ToastContainer";
import Footer from "../../../CommonComponent/Footer";
const NewUser = () => {
  // const notify = () => toast("You don't have any plan");
  const [isVisible, setIsVisible] = useState(false);

  // const handleClick = () => {
  //   setIsVisible(!isVisible);

  //   setTimeout(() => {
  //     setIsVisible(false);
  //   }, 5000);
  // };
  return (
    <div>
      <MainNavbar />

      <AddUser />
      {/* <div
        style={{
          marginBottom: "5rem",
          // width: "  100vw",
          display: "flex",
          justifyContent: "center"
        }}
      /> */}
      <Footer />
    </div>
  );
};

export default NewUser;
