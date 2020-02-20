import React from "react";
import { createGlobalStyle } from 'styled-components';

import NasaContainer from './components/NasaContainer';

const App = () => {
   const GlobalStyles = createGlobalStyle`
      @import url('https://fonts.googleapis.com/css?family=Roboto');
      body {
         font-family: 'Roboto', sans-serif;
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
