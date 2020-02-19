import React, { useState, useEffect } from "react";
import axios from "axios";

import NasaCard from "./components/NasaCard";

import { NASA_API_KEY } from "./config.js";

import "./App.css";

const App = () => {
   const [images, setImages] = useState([]);
   const NASA_API = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`

   const generateRandomDates = (count) => {
      return ['2012-01-01','2011-01-01','2010-01-01','2009-01-01']
   }

   useEffect(() => {
      generateRandomDates(10).forEach(date => {
         console.log(date);
         axios.get(NASA_API, {
            params: {
               hd: true,
               date: date
            }
         })
            .then(function (response) {
               // handle success
               images.push(response.data);
               setImages([...images]);
            })
            .catch(function (error) {
               // handle error
               console.log('Error', error);
            })
      })
   }, [])

   return (
      <div className="App">
         {
            images.map((image) => {
               return (
                  <NasaCard key={image.date} title={image.title} info={image.explanation} date={image.date} imgSrc={image.hdurl} />
               )
            })
         }
         {
            console.log(images)
         }
      </div>
   );
}

export default App;
