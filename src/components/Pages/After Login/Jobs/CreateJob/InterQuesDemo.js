import React, { useEffect, useState } from "react";
import InterVirtual from "../InterVirtual";
import data from "./data.json";
import InterResponse from "../InterResponse";

const InterQuesDemo = () => {
  const [inputValue, setInputValue] = useState(
    [
      // {
      //   question_id: 1975,
      //   job_id: 589,
      //   job_title: "Robotics Engineer",
      //   question: "What is Arduino?",
      //   options: [
      //     {
      //       question_option_id: 4572,
      //       question_id: 1975,
      //       question_option_title:
      //         "open-source electronics platform based on easy-to-use hardware and software"
      //     },
      //     {
      //       question_option_id: 4573,
      //       question_id: 1975,
      //       question_option_title: "scripting language"
      //     }
      //   ]
      // }
    ]
  );
  const [inputFieldList, setinputFieldList] = useState([]);
  const [formval, setformval] = useState([{ responsibility: " " }]);
  const [arrVal, setarrVal] = useState([{ value: "" }, { value: "" }]);
  const addOption = () => {
    setarrVal([...arrVal, { placeholder: "", value: "" }]);
  };

  const removeUsers = i => {
    const newArray = [...arrVal];
    newArray.splice(i, 1);
    setarrVal(newArray);
  };
  const handleQuestionClick = item => {
    setInputValue(item.question);
    // let arrayList = inputFieldList;
    inputFieldList.push(inputValue);
    // arrayList.push(inputValue);
    // setinputFieldList(arrayList);
    // console.log(arrayList);
    // console.log(arrayList);
    console.log(item.question);
    setformval([...formval, { responsibility: " " }]);
    setarrVal(
      item.options.map(option => ({
        value: option.question_option_title
      }))
    );
  };
  const handleInputChange = event => {
    setInputValue(event.target.value);
    // console.log(inputValue);
  };

  const addmore = () => {
    setformval([...formval, { responsibility: " " }]);
  };
  const handleremove = i => {
    const newformval = [...formval];
    newformval.splice(i, 1);
    setformval(newformval);
  };
  const onSubmit = event => {
    event.preventDefault();
  };

  useEffect(() => {}, [inputValue]);

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
            {inputFieldList.map(item =>
              <InterVirtual
                handleremove={handleremove}
                handleInputChange={handleInputChange}
                inputValue={inputValue}
                addOption={addOption}
                removeUsers={removeUsers}
                arrVal={arrVal}
                items={item}
              />
            )}
            {/* {inputFieldList.map(item =>
              <h3>
                {item}
              </h3>
            )} */}
          </form>
        </div>
        {/* ------------------------------------------Add Question Section--------------------------------------------------- */}

        <div className="addquestions">
          {data.map(item =>
            <div key={item.question_id}>
              <button
                style={{ backgroundColor: "white", color: "black" }}
                onClick={() => handleQuestionClick(item)}
              >
                Question: {item.question}
              </button>
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

export default InterQuesDemo;
