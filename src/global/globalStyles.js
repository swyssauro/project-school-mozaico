import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`  
  * {
    font-family: 'Poppins',sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1, h2, h3 {
    color: #031b4e;
  }
  :focus { outline: none }
  ::-webkit-scrollbar { width: 0px; }
`;
