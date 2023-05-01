import React, { useState } from "react";
import "./InterviewQues.css";
import InterResponse from "../InterResponse";
import InterVirtual from "../InterVirtual";
import InterAddArrQues from "../InterAddArrQues";

const InterviewQues = () => {
  const [formval, setformval] = useState([{ responsibility: " " }]);
  const addmore = () => {
    setformval([...formval, { responsibilitu: " " }]);
  };
  const handleremove = i => {
    const newformval = [...formval];
    newformval.splice(i, 1);
    setformval(newformval);
  };
  const onSubmit = event => {
    event.preventDefault();
  };
  return (
    <div>
      <InterResponse />
      <div>
        <button
          style={{ width: "17rem", marginInline: "2rem" }}
          onClick={addmore}
        >
          ADD OPTION +
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginInline: "2rem"
        }}
      >
        <h3>Virtual Interview</h3>
        <h3>Suggested Virtual Interview Questions</h3>
      </div>
      <div
        style={{
          display: "flex",
          marginBlock: " 2rem"
        }}
      >
        <div style={{ display: "flex" }}>
          <form onSubmit={onSubmit}>
            {formval.map((item, i) =>
              <InterVirtual handleremove={handleremove} />
            )}
          </form>
          <InterAddArrQues />
        </div>
      </div>
      <div>
        <button
          style={{ width: "17rem", marginInline: "2rem" }}
          onClick={addmore}
        >
          ADD OPTION +
        </button>
      </div>
    </div>
  );
};
export default InterviewQues;
