import React, {useState} from "react";
import "./Login.css";
import { Link} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import AfterLogin from "../Pages/After Login/AfterLogin";

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // simulate API call with a delay of 1 second
    setTimeout(() => {
      // check if email and password match a predefined value
      if (email === 'zaajira123@gmail.com' && password === 'zaajira') {
        setIsLoggedIn(true);
        // <Link to= "/AfterLogin"></Link>
      } else {
        alert('Invalid email or password');
      }
    }, 1000);
  };

  if (isLoggedIn) {
    // if user is logged in, redirect to the home page
    window.location.replace('/AfterLogin');
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
              type="password"
              placeholder="Password"
              className="inputText"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
             
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
            />
        
        {/* <Link to = "/AfterLogin"> */}
            <button className="buton" type="submit">
              LOGIN
            </button>
            {/* </Link> */}
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
