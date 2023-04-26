import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    // simulate API call with a delay of 1 second
    setTimeout(() => {
      // check if email and password match a predefined value
      if (email === "zaajira123@gmail.com" && password === "Zaajira@123") {
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
        <h4>
          {props.heading}
        </h4>
        <div className="form">
          <form action="#" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email or Phone"
              className="inputText"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />{" "}
            <br />
            <input
              placeholder="Password"
              className="inputText"
              value={password}
              type={passwordVisible ? "text" : "password"}
              onChange={e => setPassword(e.target.value)}
              pattern="^(?=.*[a-zA-Z0-9 @]).{8,16}$"
              title="Atleast 1 character should be small letter, 1 character should be capital letter, numbers between 0-9 and @ is required "
            />
            <button
              type="button"
              onClick={handlePasswordToggle}
              style={{
                position: "absolute",
                right: "100px",
                paddingBlock: "0px",
                backgroundColor: "transparent",
                margin: "21px 0px 0px 0px"
              }}
            >
              {passwordVisible
                ? <i
                    class="fa-solid fa-eye"
                    style={{ color: "rgb(97, 70, 227)" }}
                  />
                : <i
                    class="fa-solid fa-eye-slash"
                    style={{ color: "rgb(97, 70, 227)" }}
                  />}
            </button>
          </form>
        </div>
      </div>
      <input type="checkbox" />Remember Me
      <ReCAPTCHA
        className="inputCheckbox"
        sitekey="6LfsDoQlAAAAAO8TBcrbc5dDl7hDxg95RiMcQpDL"
      />
      <button className="buton" type="submit">
        LOGIN
      </button>
      <div className="textalign">
        <span>
          {props.confirmation}
        </span>
        <Link to="/EmpRegister">Register</Link>
        <br />
        <a href="#">
          {props.back}
        </a>
      </div>
    </div>
  );
};

export default Login;
