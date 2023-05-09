// import React, { useState } from "react";
// import "./InterVirtual.css";

// export default function InterVirtual(props) {

//   return (
//     <>

//       <div className="mainbox">
//       <div className="firstfield comman">
//         {" "}<div>

//               <input
//             type="text"
//             placeholder="Have you created smart contracts before?"
//             value={props.items} onChange={props.handleInputChange} />

//         </div>
//         <div className="marginIcon">
//           <button onClick={props.handleremove} style={{ backgroundColor: "white" }}>
//             {" "}<i
//               class="fa-solid fa-trash-can"
//               style={{ color: "red", fontSize: "25px" }}
//             />
//           </button>
//         </div>
//       </div>

//       {props.arrVal.map((item, i) =>
//         <div className="comman" key={i}>
//           {" "}<div>

//             <input type="text" placeholder={"Enter Option " + (i + 1)} value={item.value}/>
//           </div>
//           <div style={{ display: "flex" }}>
//             <div>
//               <input
//                 type="checkbox"
//                 style={{
//                   fontSize: "10px",
//                   height: "17px",
//                   border: "2px solid",
//                   width: "30px",
//                   display: "inline"
//                 }}
//               />
//             </div>
//             <div style={{ width: "70px", fontWeight: "500" }}>
//               Mark As Correct
//             </div>
//           </div>
//           <div style={{ marginLeft: "20px" }}>
//             <button
//               onClick={() => props.removeUsers(i)}
//               style={{ backgroundColor: "white" }}
//             >
//               <i
//                 class="fa-solid fa-trash-can"
//                 style={{
//                   color: "red",
//                   fontSize: "25px"
//                 }}
//               />
//             </button>
//           </div>
//         </div>
//       )}

//       <div>
//         <button style={{ width: "17rem" }} onClick={props.addOption}>
//           ADD OPTION +
//         </button>
//       </div>
//       <div
//         className="comman lastfield"
//         style={{ display: "block", fontSize: "1.2rem" }}
//       >
//         <label htmlFor="Score" style={{ display: "block", fontWeight: "500" }}>
//           Score
//         </label>

//         <input type="number" placeholder="0" />
//       </div>
//           </div>

//     </>

//   );
// }

import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
const InterVirtual = () => {
  const cartData = useSelector(state => state.cartData);
  return (
    <div>
      <div>
        {cartData.map(item =>
          <Card>
            <Card.Header key={item.key}>
              {item.job_title}
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {item.question}
              </Card.Title>
              {item.options.map(option =>
                <Card.Text key={option.question_option_id}>
                  {option.question_option_title}
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
};

export default InterVirtual;
