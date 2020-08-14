import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #519739;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #466b39;
    font: 400 14px Archivo;
  }

  button {
    cursor: pointer;
  }
`;
