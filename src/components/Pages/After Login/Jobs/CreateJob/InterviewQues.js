import React, { useState } from "react";
import "./InterviewQues.css";
import InterResponse from "../InterResponse";
import InterVirtual from "../InterVirtual";
import "../InterVirtual.css";
import JobView from "../JobView";
import data from "./data.json";
const InterviewQues = () => {
  const [arrVal, setarrVal] = useState([{ value: "" }, { value: "" }]);
  const addOption = () => {
    setarrVal([...arrVal, { placeholder: "", value: "" }]);
  };
  const removeUsers = i => {
    const newArray = [...arrVal];
    newArray.splice(i, 1);
    setarrVal(newArray);
  };
  const [inputValue, setInputValue] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = item => {
    setInputValue(item.question);
    setformval([...formval, { responsibilitu: " " }]);
    // document.getElementById("ques").style.display = "none";
    setSelectedQuestion(item);
    setarrVal(
      item.options.map(option => ({
        value: option.question_option_title
      }))
    );
  };
  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

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
              <InterVirtual
                handleremove={handleremove}
                handleInputChange={handleInputChange}
                inputValue={inputValue}
                addOption={addOption}
                removeUsers={removeUsers}
                arrVal={arrVal}
              />
            )}
          </form>
        </div>
        <div className="addquestions">
          {/* {interviewQuestions.map(question =>
            <div key={question.question_id}>
              <div onClick={() => handleQuestionClick(question)}>
                {question.question}
              </div>
            </div>
          )} */}

          {data.map(item =>
            <div key={item.question_id}>
              <p onClick={() => handleQuestionClick(item)}>
                Question: {item.question}
              </p>
              <div>
                {item.options.map(item =>
                  <div key={item.question_option_id}>
                    <p
                      style={{
                        backgroundColor: "rgb(234, 234, 234)",
                        height: "4rem",
                        padding: " 0.5rem 1rem",
                        borderRadius: "20px"
                      }}
                    >
                      {item.question_option_title}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
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
