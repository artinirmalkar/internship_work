import React from "react";
import "./ProfileCard.css";

export default function ProfileCard() {
  return (
    <div className="ProfileCard">
      <div className="Card-top card-section">
        <div className="Card-top-element">
          <i class="fa-solid fa-user"></i>
        </div>
        <div className="Card-top-element">
          <p>Candidate fullname</p>
        </div>
        <div className="Card-top-element">
          {" "}
          <p>__ days ago</p>
        </div>
      </div>

      <div className="Card-middle card-section">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="Card-bottom card-section">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
