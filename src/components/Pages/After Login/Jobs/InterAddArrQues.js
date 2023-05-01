import React from "react";
import "./InterVirtual.css";
const InterAddArrQues = props => {
  return (
    <div>
      <div className="addquestions">
        <h4>
          {props.defaultvalue}
        </h4>
      </div>
    </div>
  );
};

InterAddArrQues.defaultProps = {
  defaultvalue: "Suggested Virtual Interview Questions"
};
export default InterAddArrQues;
