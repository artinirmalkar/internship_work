import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import ToastContainer from "../ToastContainer";
import Aos from "aos";
import "aos/dist/aos.css";
import "./PricingPlansCard.css";
import Button from "react-bootstrap/Button";

const PricingPlansCard = () => {
  const details = [
    {
      title: "3 Jobs per month",
      mPrice: "TZS 102000.00",
      aPrice: "TZS 1000000.00",
    },
    {
      title: "5 Jobs per month",
      mPrice: "TZS 153000.00",
      aPrice: "TZS 1000000.00",
    },
    {
      title: "10 Jobs per month",
      mPrice: "TZS 275400.00",
      aPrice: "TZS 1000000.00",
    },
    {
      title: "25  Jobs per month",
      mPrice: "TZS 102000.00",
      aPrice: "TZS 1000000.00",
    },
    {
      title: "25  Jobs per month",
      mPrice: "TZS 102000.00",
      aPrice: "TZS 1000000.00",
    },
    {
      title: "25  Jobs per month",
      mPrice: "TZS 102000.00",
      aPrice: "TZS 1000000.00",
    },
    {
      title: "25  Jobs per month",
      mPrice: "TZS 102000.00",
      aPrice: "TZS 1000000.00",
    },
    {
      title: "25  Jobs per month",
      mPrice: "TZS 102000.00",
      aPrice: "TZS 1000000.00",
    },
    {
      title: "25  Jobs per month",
      mPrice: "TZS 102000.00",
      aPrice: "TZS 1000000.00",
    },
    {
      title: "25  Jobs per month",
      mPrice: "TZS 102000.00",
      aPrice: "TZS 1000000.00",
    },
  ];
  const [adduser, setadduser] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (redirect) {
      setadduser(true);
      localStorage.setItem("User", adduser);

      const timer = setTimeout(() => {
        window.location.href = "/BasicDetails";

        console.log(adduser);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [redirect]);

  const handleOnClick = () => {
    setadduser(true);
    setRedirect(true);
  };
  return (
    <>
      {redirect ? <ToastContainer message="Plan Selected" /> : ""}
      <div
        className="cardprice"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          lineHeight: "50px",
        }}
      >
        {details.map((items, i) => (
          <div className="card" data-aos="flip-left">
            <h3>{items.title}</h3>
            <p>Monthly Price</p>
            <h3>{items.mPrice}</h3>
            <p>Annual Price (1 month free)</p>
            <h3>{items.aPrice}</h3>
            <div>
              <Button
                className="chooseplanbtn"
                onClick={handleOnClick}
                size="sm"
              >
                Choose Plan
              </Button>{" "}
              {/* <button className="chooseplanbtn" onClick={handleOnClick}>Choose Plan</button> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingPlansCard;
