import React from 'react'
import './NasaCard.css'

const NasaCard = props => {
   console.log(props.imgSrc)
   return (
      <div className="card" style={{ backgroundImage: `url(${props.imgSrc})` }}>
         <div class="info">
            <div class="first">
               <h2>{props.title}</h2>
               <h3>{props.date}</h3>
            </div>
            <div class="second">
               <p>{props.info}</p>
            </div>
         </div>
      </div>
   )
}

export default NasaCard;