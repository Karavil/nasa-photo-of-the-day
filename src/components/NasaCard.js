import React from 'react'
import styled from 'styled-components';

const NasaCard = props => {

   const Card = styled.div`
      position: relative;
      background-color: black;
      color: white;
      height: 70vh;

      .info {
         width: 100%;
         padding: 20px;

         background: red;

         display: flex;
         flex-direction: row;
         
         .first {
            width: 30%;
         }
         .second {
            width: 70%;
         }
      }
   `
   return (
      <Card className="card" style={{ backgroundImage: `url(${props.imgSrc})` }}>
         <div class="info">
            <div class="first">
               <h2>{props.title}</h2>
               <h3>{props.date}</h3>
            </div>
            <div class="second">
               <p>{props.info}</p>
            </div>
         </div>
      </Card>
   )
}

export default NasaCard;