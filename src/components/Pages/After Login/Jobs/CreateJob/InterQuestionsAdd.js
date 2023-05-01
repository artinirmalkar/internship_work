// import React, { useState } from "react";

// const InterQuestionsAdd = () => {
//     const [inputValue, setInputValue] =useState(0)
//   const interviewQuestions = [
//     "What are your strengths?",
//     "What are your weaknesses?",
//     "Why do you want to work for our company?"
//     // Add more interview questions here
//   ];
//   const handleQuestionClick = question => {
//     setInputValue(question);
//   };
//   const handleInputChange = event => {
//     setInputValue(event.target.value);
//   };
//   const handleSendClick = () => {
//     // Do something with the input value
//   };

//   return (
//     <>
//         {interviewQuestions.map(question => (
//   <div key={question}>
//     <span onClick={() => handleQuestionClick(question)}>{question}</span>
//   </div>
// ))}
// <input type="text" value={inputValue} onChange={handleInputChange} />
// <button onClick={handleSendClick}>Send</button>

//     </>
//   );
// };

// export default InterQuestionsAdd;

import React, { useState } from "react";

const QuestionList = () => {
  const questions = [
    {
      id: 1,
      question: "What is your favorite color?",
      options: ["Red", "Blue", "Green"]
    },
    {
      id: 2,
      question: "What is your favorite food?",
      options: ["Pizza", "Sushi", "Burgers"]
    }
  ];

  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleQuestionClick = question => {
    setSelectedQuestion(question.question);
    setSelectedOptions(question.options);
  };

  const handleOptionClick = option => {
    setSelectedOptions([option]);
  };

  return (
    <div>
      {questions.map(question =>
        <button key={question.id} onClick={() => handleQuestionClick(question)}>
          {question.question}
        </button>
      )}
      <br />
      <label htmlFor="question">Question:</label>
      <input
        type="text"
        id="question"
        name="question"
        value={selectedQuestion ? selectedQuestion : ""}
        readOnly
      />

      <div>
        {selectedOptions.map((option, index) =>
          <div key={index}>
            <input
              type="text"
              id={`option-${index}`}
              name={`option-${index}`}
              value={option}
              readOnly
            />
            <button onClick={() => handleOptionClick(option)}>Select</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionList;
