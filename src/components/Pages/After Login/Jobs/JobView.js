import React from "react";
import MainNavbar from "../../../CommonComponent/MainNavbar";
import Footer from "../../../CommonComponent/Footer";
import data from "./CreateJob/data.json";
const JobView = () => {
  return (
    <div>
      <MainNavbar />
      <div>
        <div style={{ padding: "2rem", justifyContent: "center" }}>
          <i class="fa-solid fa-magnifying-glass" />{" "}
          <input
            type="search"
            placeholder="Search Job"
            style={{ width: "90%" }}
          />{" "}
          <button>Search</button>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h3>My Lists</h3>
            <div>
              <button style={{ marginInline: "1rem" }}>Draft Job</button>
              <button style={{ marginInline: "1rem" }}>Create Job</button>
              <button style={{ marginInline: "1rem" }}>Create Job</button>
            </div>
          </div>
          <div>
            {data.map(item =>
              <div key={item.question_id}>
                <p>
                  Question: {item.question}
                </p>
                <div>
                  {item.options.map(item =>
                    <div key={item.question_option_id}>
                      <p>
                        Option: {item.question_option_title}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobView;
