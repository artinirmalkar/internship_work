import React from "react";
import { useState } from "react";

const NewUser = () => {
  const [formval, setformval] = useState([
    { name: "", email: "", password: "" },
  ]);
  const adduser = () => {
    setformval([...formval, { name: "", email: "", password: "" }]);
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
            <lable>Name</lable>
            <input type="text" value={item.name} />
            <lable>Email</lable>
            <input type="email" value={item.email} />
            <lable>Password</lable>
            <input type="password" value={item.password} />
            <button>remove</button>
          </div>
        ))}
      </form>
    </>
  );
};

export default NewUser;
