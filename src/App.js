import React, { useState, useEffect } from "react";

import NasaCard from "./components/NasaCard";

import { NASA_API_KEY } from "./config.js"; 

import "./App.css";

const App = () => {
   const [nasaImages, setNasaImages] = useState([]);

   useEffect(() => {
      
   }, [nasaImages])

   const NASA_API = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`

   return (
      <div className="App">
         {

         }
      </div>
   );
}

export default App;
