import React from "react";
import "./Login.css";
import ReCAPTCHA from "react-google-recaptcha";
const Login = props => {
  const onChange = () => {};
  return (
    <div className="mainBody">
      <h4>
        {props.heading}
      </h4>
      <div className="topdetail">
        <div className="form">
          <form action="#">
            <input
              type="email"
              placeholder="Email or Phone number"
              required
            />{" "}
            <br />
            <input type="password" placeholder="Password" required />
          </form>
        </div>
        <div className="btnCaptcha">
          <ReCAPTCHA
            sitekey="6LfsDoQlAAAAAO8TBcrbc5dDl7hDxg95RiMcQpDL"
            onChange={onChange}
          />
          <button className="loginBtn" type="submit">
            LOGIN
          </button>
        </div>
      </div>
      <div className="textalign">
        <span>
          {props.confirmation}
        </span>
        <a href="#">Register</a>
        <br />
        <a href="#">
          {props.back}
        </a>
      </div>
    </div>
  );
};

export default Login;
