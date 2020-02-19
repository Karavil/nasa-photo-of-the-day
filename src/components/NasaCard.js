import React from 'react'

const NasaCard = props => {
   return (
      <div class="card">
         <img src={props.imgSrc} alt='An image from NASA. A different image provided each day (mostly pertaining to space exploration)'></img>
         <h2>{props.title}</h2>
         <h3>{props.date}</h3>
      </div>
   )
}

export default NasaCard;