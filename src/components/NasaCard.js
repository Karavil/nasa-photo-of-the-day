import React from 'react'
import styled from 'styled-components';

const NasaCard = props => {

   const Card = styled.div`
      position: relative;

      background-color: black;
      color: white;
      background-image: url(${props.imgSrc});
      background-size: cover;
      background-position: center;

      height: 75vh;

      border-bottom: 2px solid grey;

      .info {
         position: absolute;
         bottom: 0;
         left: 0;

         width: 100%;
         padding: 10px 35px;

         background: rgba(0, 0, 0, 0.70);

         display: flex;
         flex-direction: row;
         justify-content: space-between;
         
         .first {
            width: 400px;
         }
         .second {
            width: 70%;
            text-align: right;
         }
      }

      h3 {
         display: inline-block;
         text-align: center;
         color: black;
         width: auto;
         padding: 0.4rem 0.7rem;
         background: white;
         border: 2px solid black;
      }
   `
   return (
      <Card className="card">
         <div className="info">
            <div className="first">
               <h1>{props.title}</h1>
               <h3><i>{props.date}</i></h3>
            </div>
            <div className="second">
               <p>{props.info}</p>
            </div>
         </div>
      </Card>
   )
}

export default NasaCard;