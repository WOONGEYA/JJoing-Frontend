import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
  *{
  margin: 0;
  padding: 0;
  }
  *::-webkit-scrollbar {
    display: none;
  }
`

export default GlobalStyle;