import React from 'react'
import NasaCard from './NasaCard';

const NasaImages = (props) => {
   const imageCards = props.images.map((image) => {
      return (
         <NasaCard
            key={image.date}
            title={image.title}
            info={image.explanation}
            date={image.date}
            imgSrc={image.hdurl}
         />
      )
   })

   return (
      <div className="nasa-images">
         {imageCards}
      </div>
   );
}

export default NasaImages;