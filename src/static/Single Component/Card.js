import React from 'react'
import CardCarousel from './CardCarousel'

const Card = () => {
  return (
    <div className='card'>
      <CardCarousel/>
      <div className="content" style={{ width:"17rem", padding:"10px"}}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia nobis eaque cum praesentium itaque aliquid fugiat, sapiente quasi rerum laudantium deleniti culpa. Fuga quidem labore perferendis natus quas in distinctio excepturi fugit, nobis alias obcaecati unde nulla ut blanditiis dolor aspernatur error incidunt vitae ab officiis? Dicta totam sint maxime.
      </div>
    </div>
  )
}

export default Card;
