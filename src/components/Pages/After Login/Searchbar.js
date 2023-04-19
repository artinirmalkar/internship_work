import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
const Searchbar = () => {
  return (
    <div
      className="main"
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "rgb(234, 234, 234)",
        flexWrap: "wrap",
        alignItems: "space-around",
        padding: "5% 0"
      }}
    >
      {/* <div className="left" style={{ backgroundColor: "white" }}> */}
      <div className="search" style={{ display: "flex" }}>
        {" "}<i class="fa-solid fa-magnifying-glass" />{" "}
        <input
          placeholder="Select Candidates"
          style={{ border: "none", padding: "1% 5%" }}
        />
        {/* </div> */}
      </div>
      <div className="mid" style={{ border: "none" }}>
        <i class="fa-sharp fa-solid fa-location-dot" /> here is dropdown todo
      </div>
      <div className="right" style={{ border: "none" }}>
        <button
          style={{
            backgroundColor: "rgb(98, 68, 229)",
            padding: "1em 3em",
            borderRadius: "8px",
            fontSize: "15px",
            fontWidth: "700",
            letterSpacing: "2px"
          }}
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
