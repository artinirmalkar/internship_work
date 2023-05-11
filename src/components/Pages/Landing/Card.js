import React from "react";
// import Profile from "./Profile";
const Card = (props) => {
 
  return (
   <>
   <div className="card" style={{ borderRadius:"15px",margin:" 0.5rem", height:"50vh", position:"relative",zIndex:"1", boxShadow:"1px 1px 10px black"}}>
     <div
      className="Topcard"
      style={{
        display: "flex",
        paddingBlock: "8px",
        backgroundColor: "rgb(98, 68, 229)",
        width: "13rem",
        height: "5rem",
        borderRadius: "10px",
        textAlign:"left",
        // justifyContent: "space-around",
        alignItems: "center"
      }}
    >
      <div className="profile" style={{flexBasis:"60px", paddingLeft:"8px"}}>
      <div>
        <i style={{backgroundColor:"rgb(52, 58, 64)", color:"rgb(255, 255, 255)", borderRadius:"30px", padding:"10px 13px",  fontSize: "21px"}} class="fa-solid fa-user"></i>
    </div>
      </div>
      <div className="content" >
        <div style={{ color: "White", fontSize: "25px" }}>
          {props.name}
        </div>
        <div style={{ color: "White", fontSize: "15px", lineHeight: "1rem" }}>
          {props.position}
        </div>
      </div>
    </div>
    <div
      className="content"
      style={{
      
        width: "13rem",
        padding: "30px 20px",

        textAlign: "left",

        display: "inline-block",
        fontSize:"1.2rem",
      }}
    >
      {props.desc}
    </div>
    </div>
   </>
 
  );
}

export default Card;
