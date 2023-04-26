import React, {useState, useEffect} from 'react'
import ToastContainer from '../ToastContainer'
import { Link } from 'react-router-dom'
import NewUser from '../Profile/NewUser'




const PricingPlansCard = () => {
   const details=[{title:"3 Jobs per month", mPrice:"TZS 102000.00", aPrice:"TZS 1000000.00"},
   {title:"5 Jobs per month", mPrice:"TZS 153000.00", aPrice:"TZS 1000000.00"},
   {title:"10 Jobs per month", mPrice:"TZS 275400.00", aPrice:"TZS 1000000.00"},
   {title:"25 Jobs eeeeeper month", mPrice:"TZS 102000.00", aPrice:"TZS 1000000.00"},
   {title:"25 Jobs eeeeeper month", mPrice:"TZS 102000.00", aPrice:"TZS 1000000.00"},
   {title:"25 Jobs eeeeeper month", mPrice:"TZS 102000.00", aPrice:"TZS 1000000.00"},
   {title:"25 Jobs eeeeeper month", mPrice:"TZS 102000.00", aPrice:"TZS 1000000.00"},
   {title:"25 Jobs eeeeeper month", mPrice:"TZS 102000.00", aPrice:"TZS 1000000.00"},
   {title:"25 Jobs eeeeeper month", mPrice:"TZS 102000.00", aPrice:"TZS 1000000.00"},
   {title:"25 Jobs eeeeeper month", mPrice:"TZS 102000.00", aPrice:"TZS 1000000.00"},
  ]
  
  
// const[showToast, setShowTest]=useState(false)
//   const handleOnClick=()=>{
//     setShowTest(true)
    
//   }
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowTest(false)
    
//     }, 3000);

//     return () => {
//       clearTimeout(timer);
//     };
//   });

const [redirect, setRedirect] = useState(false);

useEffect(() => {
  if (redirect) {
    const timer = setTimeout(() => {
    window.location.href = '/NewUser';
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }
}, [redirect]);

const handleOnClick = () => {
  setRedirect(true);
};
  return (
  <>
   
  {
   redirect?<ToastContainer message='Plan Selected'/>:""
  }
   

  <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", textAlign:"center", position:"relative", lineHeight:"50px"}}>
  {details.map((items,i)=>(
    <div className="card" style={{backgroundColor:"rgb(234, 234, 234)", borderRadius:"20px",height:"25rem", width:"17rem", margin:"2%", padding:"25px" , border:"none"}} >
<h3>{items.title}</h3>
<p>Monthly Price</p>
<h3>{items.mPrice}</h3>
<p>Annual Price
(1 month free)</p>
<h3>{items.aPrice}</h3>
<div>

<button onClick={handleOnClick} style={{width:"fit-content", position:"absolute", bottom:"5px", left:"70px", paddingBlock:"0px"}}>Choose Plan</button>

</div>

    </div>
  ))}

    </div>
</>
  )
};

export default PricingPlansCard;
