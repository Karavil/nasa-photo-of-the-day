import React from 'react'
import './NasaCard.css'

const NasaCard = props => {
   return (
      <div className="card">
         <img src={props.imgSrc} alt='An image from NASA. A different image provided each day (mostly pertaining to space exploration)'></img>
         <h2>{props.title}</h2>
         <h3>{props.date}</h3>
      </div>
   )
}

export default NasaCard;