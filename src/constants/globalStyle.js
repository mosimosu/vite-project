import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html, body {
    width: 100%;
    height: 100dvh;
    
}

*, *::before,*::before{
    box-sizing: border-box;
    outline: none;
    outline-width: 0;
    padding: 0;
    margin: 0;
}
`;

export default GlobalStyle;
