import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Josefin Sans";
    src: url("/fonts/JosefinSans-VariableFont_wght.ttf");
  }

  :root {
    font-family: "Josefin Sans", sans-serif;
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color:#8e8e8e;
  }
`;

export default GlobalStyles;
