import React, { useState } from "react";
import "./AddUser.css";
const AddUser = () => {
  const [formval, setformval] = useState([
    { name: "", email: "", password: "" },
  ]);
  const adduser = () => {
    setformval([...formval, { name: "", email: "", password: "" }]);
  };
  const handleremove = (i) => {
    const newformval = [...formval];
    newformval.splice(i, 1);
    setformval(newformval);
  };
  const handleinput = (e, i) => {
    const newlst = [...formval];
    newlst[i][e.target.name] = [e.target.value];
    setformval(newlst);
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ margin: "1rem 2rem " }}>
      {" "}
      <button onClick={adduser}>Add</button>
      <form action="#" onSubmit={onSubmit}>
        {formval.map((item, i) => (
          <div
            key={i}
            className="form"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <div className=" input">
              <label htmlFor="Name">Name</label> <br />
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                value={item.name}
                onChange={(e) => handleinput(e, i)}
              />
            </div>
            <div className=" input">
              <label htmlFor="Email">E-mail</label> <br />
              <input
                type="email"
                placeholder="Enter Email"
                value={item.email}
                name="email"
                onChange={(e) => handleinput(e, i)}
              />
            </div>
            <div className="input">
              <label htmlFor="Password">Password</label> <br />
              <input
                type="password"
                placeholder="Enter Password"
                value={item.password}
                name="password"
                onChange={(e) => handleinput(e, i)}
              />
            </div>

            <button
              style={{
                backgroundColor: "rgb(234, 234, 234)",
                color: "red",
                letterSpacing: "1.5px",
              }}
              onClick={() => handleremove(i)}
            >
              REMOVE
              <i class="fa-solid fa-trash-can" />
            </button>
          </div>
        ))}
      </form>
    </div>
  );
};

export default AddUser;
