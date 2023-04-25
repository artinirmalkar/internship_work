import React from 'react'

const PricingPlansCard = (props) => {
   
  return (
  <>
   

  <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", textAlign:"center"}}>
    <div className="card" style={{backgroundColor:"yellow",height:"60vh", width:"17rem", margin:"2%", padding:"25px" , border:"none"}} >
<h3>{props.jobs}</h3>
<p>Monthly Price</p>
<h3>{props.monthlyprice}</h3>
<p>Annual Price
(1 month free)</p>
<h3>{props.annualprice}</h3>
    <button style={{width:"fit-content", marginInline:"auto"}}>Choose Plan</button>

    </div>

    <div className="card" style={{backgroundColor:"yellow", height:"60vh",  width:"17rem", margin:"2%"}}>
    2
    </div>
    <div className="card" style={{backgroundColor:"yellow", height:"60vh",  width:"17rem", margin:"2%"}}>
    3
    </div>
    <div className="card" style={{backgroundColor:"yellow", height:"60vh",  width:"17rem", margin:"2%"}}>
    4
    </div>
    </div>
</>
  )
}

export default PricingPlansCard
