import React, { useState } from "react";
import "";
// import  from "react";

const Demo = () => {
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
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <button onClick={adduser}>Add</button>
      <form action="#" onSubmit={onSubmit}>
        {formval.map((item, i) => (
          <div>
            {/* <lable>Name</lable>

            <input type="text" value={item.name} />
            <lable>Email</lable>
            <input type="email" value={item.email} />
            <lable>Password</lable>
            <input type="password" value={item.password} />
            <button onClick={handleremove}>remove</button> */}
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
                  letterSpacing: "1.5px",
                }}
              >
                REMOVE
                <i class="fa-solid fa-trash-can" />
              </button>
            </div>
          </div>
        ))}
      </form>
    </>
  );
};

export default Demo;
