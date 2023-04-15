import React from "react";
import "./Navjob.css";
import { Link } from "react-router-dom";

export default function Navjob() {
  return (
    <div className="head">
      <Link to="./QRcode">
        <p>Looking for a job?</p>
      </Link>
    </div>
  );
}
