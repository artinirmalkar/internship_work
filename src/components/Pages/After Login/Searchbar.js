import React, { useState } from "react";
import Select from "react-select";
export default function Searchbar() {
  const [selectedOptions, setSelectedOptions] = useState();
  const optionList = [
    { value: "Kenya", label: "Kenya" },
    { value: "Tanzania", label: "Tanzania" },
    { value: "Uganada", label: "Uganada" }
  ];

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  return (
    <div
      className="search"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <div className="left" style={{ flexBasis: "400px" }}>
        <i class="fa-solid fa-magnifying-glass" />
        <input
          type="text"
          placeholder="Search Candidate"
          style={{ width: "20vw", border: "none" }}
        />
      </div>
      <div
        className="mid"
        style={{ flexBasis: "400px", backgroundColor: "red" }}
      >
        <div className="dropdown-container">
          {/* <i class="fa-sharp fa-solid fa-location-dot" /> */}
          <Select
            options={optionList}
            placeholder="Select Country"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            styles={{ border: "none" }}
          />
        </div>
      </div>

      <div className="right" style={{ flexBasis: "400px" }}>
        <button>SEARCH</button>
      </div>
    </div>
  );
}
