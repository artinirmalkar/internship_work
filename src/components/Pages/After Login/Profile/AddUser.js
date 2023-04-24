import React from "react";
import "./AddUser.css";
const AddUser = () => {
  return (
    <div style={{ margin: "1rem 2rem " }}>
      {" "}<form action="#">
        <div className="form" style={{ display: "flex", flexWrap: "wrap" }}>
          <div className=" input">
            <label htmlFor="Name">Name</label> <br />
            <input type="text" placeholder="Enter Name" />
          </div>
          <div className=" input">
            <label htmlFor="Email">E-mail</label> <br />
            <input type="email" placeholder="Enter Email" />
          </div>
          <div className="input">
            <label htmlFor="Password">Password</label> <br />
            <input type="password" placeholder="Enter Password" />
          </div>

          <button
            style={{
              backgroundColor: "rgb(234, 234, 234)",
              color: "red",
              letterSpacing: "1.5px"
            }}
          >
            REMOVE
            <i class="fa-solid fa-trash-can" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
