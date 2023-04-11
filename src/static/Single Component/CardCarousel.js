import React from 'react'
import Profile from './Profile'
const CardCarousel = () => {
  return (
    <div className='Topcard' style={{display:"flex", paddingRight:"15px",backgroundColor:"rgb(98, 68, 229)", width:"17rem",height:"5rem", borderRadius:"10px", justifyContent: "space-around", alignItems: 'center' }}>
      <div className="profile">
        <Profile/>
      </div>
      <div className="content" >
    <div style={{color:"White", fontSize:"25px"}}>Alan Mati</div>
    <div style={{color:"White", fontSize:"15px", lineHeight:"2rem"}}>Custom Service Executive</div>
      </div>
    </div>
  )
}

export default CardCarousel
