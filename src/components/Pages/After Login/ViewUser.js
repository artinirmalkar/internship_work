import React from "react";

const ViewUser = () => {
  return (
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
  );
};

export default ViewUser;
