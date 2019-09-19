import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    /* background: linear-gradient(-90deg, #0f0f17, #06060d); */
    -webkit-font-smoothing: antialiased;
    margin: 0px;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
