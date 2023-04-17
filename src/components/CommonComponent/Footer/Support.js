import React from "react";
import "./Support.css";
import ReCAPTCHA from "react-google-recaptcha";
import NavBar from "../NavBar";
import Footer from "../Footer";
import RightNavQR from "../../Pages/QR Download Section/RightNavQR";
const Support = () => {
  return (
   <> <NavBar children2={<RightNavQR/>}/>
    <div className="Main">
      <div className="Top">
        <h1>SUPPORT TICKET REQUEST</h1>
        <p>
          Please let us know how we can assist you and we will get back to you
          shortly
        </p>
      </div>
      <div className="form">
        <form action="#">
          <label htmlFor="Name" className="width">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className="width"
            style={{ padding: "8px" }}
          />
          <label htmlFor="Email" className="width" />Email
          <input
            type="email"
            placeholder="E-Mail"
            className="width"
            style={{ padding: "8px" }}
          />
          <label htmlFor="I'am an" className="width" />I'am a
          <select  className="width">
                       <option
              value="Applicant"
              className="width hh"
              style={{ padding: "8px" }}
            >
              I'm a
            </option>
            <option value="Applicant" className="width">
              I'm an Applicant
            </option>
            <option value="Employer" className="width">
              I'm an Employer
            </option>
          </select>
          <label htmlFor="Message" className="width">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="8"
            className="width"
          />
          <ReCAPTCHA sitekey="6LfsDoQlAAAAAO8TBcrbc5dDl7hDxg95RiMcQpDL" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
<Footer/>
    </>
  );
};

export default Support;
