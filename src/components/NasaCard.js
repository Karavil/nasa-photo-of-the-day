import React from 'react'
import styled from 'styled-components';

const NasaCard = props => {

   const Card = styled.div`
      position: relative;
      background-color: black;
      color: white;
      height: 70vh;

      .info {
         position: absolute;
         bottom: 0;
         left: 0;

         width: 100%;
         padding: 20px;

         background: rgba(0, 0, 0, 0.70);

         display: flex;
         flex-direction: row;
         justify-content: space-between;
         
         .first {
            width: 24%;
         }
         .second {
            width: 75%;
            text-align: right;
         }
      }
   `
   return (
      <Card className="card" style={{ backgroundImage: `url(${props.imgSrc})` }}>
         <div class="info">
            <div class="first">
               <h1>{props.title}</h1>
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