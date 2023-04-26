import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import ReCAPTCHA from "react-google-recaptcha";
const Login = props => {
  const onChange = () => {};
  return (
    <div className="MainBody">
      <div className="TopDetail">
        <h4>
          {props.heading}
        </h4>
        <div className="form">
          <form action="#">
            <input
              type="text"
              placeholder="Company Name"
              className="inputText"
              required
            />{" "}
            <input
              type="email"
              placeholder="Email or Phone"
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
              type="password"
              placeholder="Confirm Password"
              className="inputText"
              required
            />
            <input type="checkbox" name="remeber me" />
            Remember Me
            <ReCAPTCHA
              className="inputCheckbox"
              sitekey="6LfsDoQlAAAAAO8TBcrbc5dDl7hDxg95RiMcQpDL"
              onChange={onChange}
            />
            <button type="submit" className="buton">
              REGISTER
            </button>
          </form>
        </div>
      </div>
      <div className="textalign">
        <span>
          {" "}{props.confirmation}
        </span>
        <a href="#" />
        <br />
        <Link to="/EmpLogin">
          {props.back}
        </Link>
      </div>
    </div>
  );
};

export default Login;
