import React, { useState } from "react";
import "./InterResponse.css";
const InterResponse = () => {
  const [formval, setformval] = useState([{ responsibility: " " }]);

  const addmore = () => {
    setformval([...formval, { responsibilitu: " " }]);
  };

  const handleremove = i => {
    const newformval = [...formval];
    newformval.splice(i, 1);
    setformval(newformval);
  };
  const handleinput = (e, i) => {
    const newlst = [...formval];
    newlst[i][e.target.name] = [e.target.value];
    setformval(newlst);
  };
  const onSubmit = event => {
    event.preventDefault();
  };
  return (
    <div>
      <h4 style={{ margin: "1rem 2rem" }}>Responsibilities</h4>
      <div className="responsibility">
        <form onSubmit={onSubmit}>
          {formval.map((item, i) =>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                placeholder="Add Responsibilities..."
                value={item.name}
                onChange={e => handleinput(e, i)}
                style={{
                  width: "80%",
                  padding: "20px 10px",
                  fontSize: "1.3rem",
                  marginBlock: "5px"
                }}
              />
              <button
                className="marginIcon"
                id="deleteIcon"
                onClick={handleremove}
              >
                {" "}<i class="fa-solid fa-trash-can" />
              </button>
              <button className="marginIcon" id="addIcon" onClick={addmore}>
                {" "}<i class="fa-solid fa-plus" />
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default InterResponse;
