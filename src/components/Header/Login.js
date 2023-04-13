import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
const Login = () => {
  const onChange = () => {};
  return (
    <div>
      <div
        style={{
          backgroundColor: "yellow",
          // height: "80vh",
          width: "30vw",
          borderRadius: "10px"
        }}
      >
        <h4 style={{ textAlign: "center", padding: "35px 20px" }}>
          Login/Sign up With a Code
        </h4>
        <div className="form" style={{ width: "100%" }}>
          <form action="#">
            <input
              type="text"
              placeholder="Email or Phone number"
              style={{
                width: "90%",
                margin: "20px",
                borderRadius: "5px",
                padding: "10px 5PX"
              }}
              required
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Password"
              style={{
                width: " 90%",
                margin: "20px",
                borderRadius: "5px",
                padding: "10px 5PX"
              }}
              required
            />
            <input
              type="checkbox"
              name="remeber me"
              style={{ margin: "20px" }}
            />Remember Me
            <ReCAPTCHA
              style={{ margin: "0px 10%" }}
              sitekey="6LfsDoQlAAAAAO8TBcrbc5dDl7hDxg95RiMcQpDL"
              onChange={onChange}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "rgb(98, 68, 229)",
                width: "90%",
                padding: "15px 0",
                margin: "20px",
                color: "WHITE"
              }}
            >
              LOGIN
            </button>
          </form>
        </div>
        <div className="detail" />
        <span>Don't have an account ?</span>
        <a
          style={{
            width: "100%",
            textDecoration: "none",
            fontWeight: "bold",
            color: "rgb(139, 89, 229)",
            margin: "0px 10%"
          }}
          href="#"
        >
          Register
        </a>
        <br />
        <a href="#">Forget Password?</a>
      </div>
    </div>
  );
};

export default Login;
