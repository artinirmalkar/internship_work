import React from "react";

const ToastContainer = ({ message }) => {
  return (
    <div
      id="mytoast"
      style={{
        backgroundColor: "rgb(255, 112, 67)",
        borderRadius: "50px",
        width: "15rem",
        padding: "10px",
        textAlign: "center",
        display: "none"
      }}
    >
      {message}
    </div>
  );
};

export default ToastContainer;
