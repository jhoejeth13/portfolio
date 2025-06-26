// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  * {
    box-sizing: border-box;
  }
`;