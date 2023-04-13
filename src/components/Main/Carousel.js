import React from 'react'
import Card from '../../static/Single Component/Card'

const Carousel = () => {
  return (
    <div className="FullCarousel" style={{display:"flex"}}  >
    
  <div className="leftcontent" style={{backgroundColor:"red", width: "25vw"}}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae recusandae porro eius nesciunt repudiandae eveniet quae in dolorum eos consectetur.
   
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
   
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
 </div>
  <div className="rightcontent">
       <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="cards-wrapper">
    <Card name="Arti" />
    <Card name="Himanshu"/>
    <Card name="Pankaj"/>
</div></div>
    <div class="carousel-item">
    <div class="cards-wrapper">
 
  <Card/>
  
  <Card/>
 
  <Card/>
</div></div>
    <div class="carousel-item">
   <div class="cards-wrapper">
   <Card/>
   <Card/>
    <Card/>
</div> </div>
  </div>
  {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
</div>
    </div>
    </div>
  )
}

export default Carousel
