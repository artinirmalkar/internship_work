import React from "react";
import "./Login.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

const Login = (props) => {
  const onChange = () => {};
  return (
    <div className="MainBody">
      <div className="TopDetail">
        <h4>{props.heading}</h4>
        <div className="form">
          <form action="#">
            <input
              type="email"
              placeholder="Email or Phone number"
              className="inputText"
              required
            />{" "}
            <br />
            <input
              type="password"
              placeholder="Password"
              className="inputText"
              required
            />
            <input
              type="checkbox"
              name="remeber me"
              className="inputCheckbox"
            />{" "}
            Remember Me
            <ReCAPTCHA
              className="inputCheckbox"
              sitekey="6LfsDoQlAAAAAO8TBcrbc5dDl7hDxg95RiMcQpDL"
              onChange={onChange}
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
