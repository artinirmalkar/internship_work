// import "./Login.css";
// import { Link } from "react-router-dom";
// import ReCAPTCHA from "react-google-recaptcha";
// import { useState } from "react";

// const Login = (props) => {
//   const [Email, setEmail] = useState("");
//   const [Password, setPassword] = useState("");
//   const [isLoggedin, setisLoggedin] = useState(false);
//   const [visiblepassword, setvisiblepassword] = useState(false);

//   const handleOnSubmit = (event) => {
//     event.preventDefault();
//     setTimeout(() => {
//       if (Email === "Zaa@gmail.com" && Password === "Zaa@123") {
//         setisLoggedin(true);
//       } else {
//         alert("Invalid email or password");
//       }
//     }, 1000);
//   };

//   const togglepassword = () => {
//     setvisiblepassword(!visiblepassword);
//   };

//   const handleEmail = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePassword = (event) => {
//     setPassword(event.target.value);
//   };

//   if (isLoggedin) {
//     window.location.replace("/AfterLogin");
//     return null;
//   }

//   return (
//     <div className="MainBody">
//       <div className="TopDetail">
//         <h4>{props.heading}</h4>
//         <div className="form">
//           <form action="#" onSubmit={handleOnSubmit}>
//             <input
//               type="Email"
//               placeholder="Email or Phone"
//               className="inputText"
//               value={Email}
//               title="Enter your Email"
//               onChange={handleEmail}
//             />{" "}
//             <br />
//             <input
//               value={Password}
//               placeholder="Password"
//               type={visiblepassword ? "text" : "password"}
//               className="inputText"
//               onChange={handlePassword}
//             />
//             <button
//               onCLick={togglepassword}
//               // type={visiblepassword ? text : password}
//             >
//               ytrey
//             </button>
//             <div>
//               <i class="fa-solid fa-eye"></i>
//             </div>
//             <div>
//               <i class="fa-solid fa-eye-slash"></i>
//             </div>
//             <input
//               type="checkbox"
//               name="remeber me"
//               className="inputCheckbox"
//             />{" "}
//             Remember Me
//             <ReCAPTCHA
//               className="inputCheckbox"
//               sitekey="6LfsDoQlAAAAAO8TBcrbc5dDl7hDxg95RiMcQpDL"
//             />
//             <button className="buton" type="submit">
//               LOGIN
//             </button>
//           </form>
//         </div>
//       </div>
//       <div className="textalign">
//         <span>{props.confirmation}</span>
//         <Link to="/EmpRegister">Register</Link>
//         <br />
//         <a href="#">{props.back}</a>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import AfterLogin from "../Pages/After Login/AfterLogin";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // simulate API call with a delay of 1 second
    setTimeout(() => {
      // check if email and password match a predefined value
      if (email === "zaajira123@gmail.com" && password === "zaajira") {
        setIsLoggedIn(true);
      } else {
        alert("Invalid email or password");
      }
    }, 1000);
  };

  function handlePasswordToggle() {
    setPasswordVisible(!passwordVisible);
  }

  if (isLoggedIn) {
    // if user is logged in, redirect to the home page
    window.location.replace("/AfterLogin");
    return null; // return null to prevent rendering anything else
  }

  return (
    <div className="MainBody">
      <div className="TopDetail">
        <h4>{props.heading}</h4>
        <div className="form">
          <form action="#" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email or Phone"
              className="inputText"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <br />
            <input
              // type="password"
              placeholder="Password"
              className="inputText"
              value={password}
              type={passwordVisible ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={handlePasswordToggle}
              style={{
                position: "absolute",
                right: "100px",
                paddingBlock: "0px",
                backgroundColor: "transparent",
                margin: "21px 0px 0px 0px",
              }}
            >
              {passwordVisible ? (
                <i
                  class="fa-solid fa-eye"
                  style={{ color: "rgb(97, 70, 227)" }}
                ></i>
              ) : (
                <i
                  class="fa-solid fa-eye-slash"
                  style={{ color: "rgb(97, 70, 227)" }}
                ></i>
              )}
            </button>
            <input
              type="checkbox"
              name="remeber me"
              className="inputCheckbox"
            />{" "}
            Remember Me
            <ReCAPTCHA
              className="inputCheckbox"
              sitekey="6LfsDoQlAAAAAO8TBcrbc5dDl7hDxg95RiMcQpDL"
            />
            <button className="buton" type="submit">
              LOGIN
            </button>
          </form>
        </div>
      </div>
      <div className="textalign">
        <span>{props.confirmation}</span>
        <Link to="/EmpRegister">Register</Link>
        <br />
        <a href="#">{props.back}</a>
      </div>
    </div>
  );
};

export default Login;
