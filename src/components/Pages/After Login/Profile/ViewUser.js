import React from "react";
import Footer from "../../../CommonComponent/Footer";
import MainNavbar from "../../../CommonComponent/MainNavbar";

const ViewUser = () => {
  return (
    <>   
    <MainNavbar/>
     <div style={{ margin: "1rem 2rem" }}>
      <h4>Users</h4>
      <table border="1" style={{ width: "100%" }}>
        <tr>
          <th style={{ width: "40%", backgroundColor: "red" }}>User Name</th>
          <th style={{ width: "40%", backgroundColor: "yellow" }}>
            User Email
          </th>
          <th style={{ width: "20%", backgroundColor: "blue" }}>Action</th>
        </tr>
      </table>
    </div>
    <Footer/>
    </>

  );
};

export default ViewUser;
