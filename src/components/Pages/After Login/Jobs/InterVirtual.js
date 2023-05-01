import React, { useState } from "react";
import "./InterVirtual.css";

export default function InterVirtual() {
  const [arrVal, setarrVal] = useState([{ value: "" }, { value: "" }]);
  const addOption = () => {
    setarrVal([...arrVal, { placeholder: "", value: "" }]);
  };
  const removeUsers = i => {
    const newArray = [...arrVal];
    newArray.splice(i, 1);
    setarrVal(newArray);
  };

  return (
    <div>
      <div className="mainbox">
        <div className="firstfield comman">
          {" "}<div>
            <input
              type="text"
              placeholder="Have you created smart contracts before?"
            />
          </div>
          <div className="marginIcon">
            {" "}<i
              class="fa-solid fa-trash-can"
              style={{ color: "red", fontSize: "25px" }}
            />
          </div>
        </div>
        {arrVal.map((item, i) =>
          <div className="comman">
            {" "}<div>
              <input type="text" placeholder={"Enter Option " + (i + 1)} />
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <input
                  type="checkbox"
                  style={{
                    fontSize: "10px",
                    height: "17px",
                    border: "2px solid",
                    width: "30px",
                    display: "inline"
                  }}
                />
              </div>
              <div style={{ width: "70px", fontWeight: "500" }}>
                Mark As Correct
              </div>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <button
                onClick={() => removeUsers(i)}
                style={{ backgroundColor: "white" }}
              >
                <i
                  class="fa-solid fa-trash-can"
                  style={{
                    color: "red",
                    fontSize: "25px"
                  }}
                />
              </button>
            </div>
          </div>
        )}

        <div>
          <button style={{ width: "17rem" }} onClick={addOption}>
            ADD OPTION +
          </button>
        </div>

        <div
          className="comman lastfield"
          style={{ display: "block", fontSize: "1.2rem" }}
        >
          <label
            htmlFor="Score"
            style={{ display: "block", fontWeight: "500" }}
          >
            Score
          </label>

          <input type="number" placeholder="0" />
        </div>
      </div>
    </div>
  );
}
