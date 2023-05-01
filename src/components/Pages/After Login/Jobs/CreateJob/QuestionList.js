import React from "react";
const QuestionList = () => {
  const data = [
    {
      question_id: 1975,
      job_id: 589,
      job_title: "Robotics Engineer",
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

  return (
    <div>
      return (
      <div>
        {data.map(question =>
          <div key={question.question_id}>
            <h2>
              {question.question}
            </h2>
            <ul>
              {question.options.map(option =>
                <li key={option.question_option_id}>
                  {option.question_option_title}
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
      );
    </div>
  );
};

export default QuestionList;
