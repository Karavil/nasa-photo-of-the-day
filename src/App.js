import React from "react";
import { createGlobalStyle } from 'styled-components';

import NasaContainer from './components/NasaContainer';

const App = () => {
   const GlobalStyles = createGlobalStyle`
      @import url('https://fonts.googleapis.com/css?family=Raleway:700,700i,800,800i,900&display=swap');
      * {
         box-sizing: border-box;
      }

      body {
         font-family: 'Raleway', sans-serif;
         margin: 0;
      }

      h1 {
         font-size: 3rem;
         font-weight: 900;
         margin: 0;
      }
   `;
   return (
      <>
         <GlobalStyles />
         <NasaContainer imageCount={20} />
      </>
   );
}

export default App;
