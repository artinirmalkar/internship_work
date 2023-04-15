import React from "react";
import { Link } from "react-router-dom";
import "./RightNavQR.css";

export default function RightNavQR() {
  return (
    <div>
      <Link to="/EmpLogin">
        <div className="Login">
          <p>LOGIN/REGISTER</p>
        </div>
      </Link>
    </div>
  );
}
