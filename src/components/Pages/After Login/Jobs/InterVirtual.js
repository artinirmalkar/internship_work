import React, { useState } from "react";
import "./InterVirtual.css";

export default function InterVirtual({ handleremove }) {
  const [arrVal, setarrVal] = useState([{ value: "" }, { value: "" }]);
  const addOption = () => {
    setarrVal([...arrVal, { placeholder: "", value: "" }]);
  };
  const removeUsers = i => {
    const newArray = [...arrVal];
    newArray.splice(i, 1);
    setarrVal(newArray);
  };

// --------------------------------------------addInterviewQuestion------------------------------------------

const [inputValue, setInputValue]= useState(null)
const interviewQuestions= [
  'What inspired you to become a frontend developer?',
  'What are the core principles of responsive web design?',
  'How do you optimize the performance of a website?',
  'Can you explain the differences between HTML and XHTML?',
  'What are some best practices for writing efficient CSS code?'
]
const handleQuestionClick = question => {
  setInputValue(question);
};
const handleInputChange = event => {
  setInputValue(event.target.value);
};


// --------------------------------------------addInterviewQuestion------------------------------------------
  

  return (
    <>  
  
      <div className="mainbox">
      <div className="firstfield comman">
        {" "}<div>
        {interviewQuestions.map(question => (
  <div key={question}>
    <span onClick={() => handleQuestionClick(question)}>{question}</span>
  </div>
))}
          <input
            type="text"
            placeholder="Have you created smart contracts before?"
            value={inputValue} onChange={handleInputChange}
          />
        </div>
        <div className="marginIcon">
          <button onClick={handleremove} style={{ backgroundColor: "white" }}>
            {" "}<i
              class="fa-solid fa-trash-can"
              style={{ color: "red", fontSize: "25px" }}
            />
          </button>
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
        <label htmlFor="Score" style={{ display: "block", fontWeight: "500" }}>
          Score
        </label>

        <input type="number" placeholder="0" />
      </div>
          </div>

    
    </>

    
  );
}
