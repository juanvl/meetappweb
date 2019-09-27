import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

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
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  form input {
    height: 50px;
    background: rgba(0,0,0, 0.2);
    border: 0;
    border-radius: 4px;
    width: 100%;
    padding: 20px;
    font-size: 18px;
    color: #fff;

    &::placeholder {
      color: rgba(255,255,255, 0.5);
    }
  }

`;
