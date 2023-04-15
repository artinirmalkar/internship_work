import React from "react";
import "./QRcode.css";
import NavBar from "../../CommonComponent/NavBar";
import RightNavQR from "./RightNavQR";

export default function QRcode() {
  return (
    <div>
      <NavBar myStyle={{ borderBottom: "none" }} children2={<RightNavQR />} />
      <div className="QRpage">
        <h1>ewqudwqu</h1>
        <div className="QRpage-left" />
        <div className="QRpage-right" />
      </div>
    </div>
  );
}
