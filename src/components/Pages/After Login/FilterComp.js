import React from "react";
import Filter from "./Filter";

export default function FilterComp() {
  return (
    <div>
      <div
        style={{
          //   padding: "20px",
          margin: "20px",
          backgroundColor: "white",
          width: "280px",
          borderRadius: "5px",
          paddingBottom: "15px",
        }}
      >
        <h5 style={{ fontWeight: "bold", padding: "14px 0px 5px 9px" }}>
          FILTERS
        </h5>
        <Filter />
        <Filter />
        <Filter />
      </div>
    </div>
  );
}
