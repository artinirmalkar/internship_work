import React, { useState } from "react";
import "./InterviewQues.css";
import InterResponse from "../InterResponse";
import InterVirtual from "../InterVirtual";
import "../InterVirtual.css";

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

  const interviewQuestions = [
    {
      question_id: 1975,
      question: "What is Arduino?",
      options: [
        {
          question_option_id: 4572,
          question_id: 1975,
          question_option_title:
            " open-source electronics platform based on easy-to-use hardware and software"
        },
        {
          question_option_id: 4573,
          question_id: 1975,
          question_option_title: "scripting language"
        }
      ]
    },
    {
      question_id: 1976,
      job_id: 589,
      job_title: "Robotics Engineer",
      question: "What is Proteus",
      options: [
        {
          question_option_id: 4574,
          question_id: 1976,
          question_option_title:
            "Design Suite is a proprietary software tool suite used primarily for electronic design automation"
        },
        {
          question_option_id: 4575,
          question_id: 1976,
          question_option_title: "Programming Language"
        }
      ]
    }
  ];
  const handleQuestionClick = question => {
    setInputValue(question.question);

    setSelectedQuestion(question);
    setarrVal(
      question.options.map(option => ({ value: option.question_option_title }))
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
        {interviewQuestions.map(question =>
          <div key={question.question_id}>
            <div className="addquestions">
              <span onClick={() => handleQuestionClick(question)}>
                {question.question}
              </span>
              {/* <span onClick={() => handleQuestionClick(question)}>
                {question_option_title}
              </span> */}
            </div>
          </div>
        )}
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
