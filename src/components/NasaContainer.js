import React, {useState, useEffect} from 'react';
import axios from 'axios';

import NasaImages from './NasaImages';

import { NASA_API_KEY } from "../config.js";

const NasaContainer = (props) => {
   const [images, setImages] = useState([]);
   const NASA_API = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`

   const generateRandomDates = (count) => {
      const lowerBound = new Date('1996-1-1').getTime();
      const currentDate = new Date(Date.now()).getTime();
      
      const dates = new Set();
      for (let i = 0; i < count; i++) {
         const randomDate = new Date((currentDate - lowerBound) * Math.random() + lowerBound);
         const formatted = randomDate.getFullYear() + '-' + (randomDate.getMonth() + 1) + '-' + (randomDate.getDay() + 1);
         dates.add(formatted);
         
      }
      return Array.from(dates);
   }

   useEffect(() => {
      generateRandomDates(props.imageCount).forEach(date => {
         axios.get(NASA_API, {
            params: {
               hd: true,
               date: date
            }
         })
            .then(function (response) {
               if (response.data.media_type === 'image') {
                  setImages(images => [...images, response.data]);
               }
            })
            .catch(function (error) {
               console.log('Error', error);
            })
      })
   }, [])

   return(
      <NasaImages images={images}/>
   )
}

export default NasaContainer;