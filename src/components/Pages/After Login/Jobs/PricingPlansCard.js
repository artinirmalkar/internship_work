import React from 'react'

const PricingPlansCard = (props) => {
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
  return (
  <>
   

  <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", textAlign:"center", position:"relative"}}>
  {details.map((items,i)=>(
    <div className="card" style={{backgroundColor:"yellow",height:"25rem", width:"17rem", margin:"2%", padding:"25px" , border:"none"}} >
<h3>{items.title}</h3>
<p>Monthly Price</p>
<h3>{items.mPrice}</h3>
<p>Annual Price
(1 month free)</p>
<h3>{items.aPrice}</h3>
    <button style={{width:"fit-content", position:"absolute", bottom:"5px", left:"70px"}}>Choose Plan</button>
    </div>
  ))}

    </div>
</>
  )
}

export default PricingPlansCard
