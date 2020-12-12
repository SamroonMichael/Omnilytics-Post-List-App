// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    body {
        height: 100%;
        position: relative;
        font-family: 'Duru Sans', sans-serif;
    }
    a {
        text-decoration: none;
        color: #fff;
    }
    img {
	    width: 100%;
    }

    ul {
        list-style-type: none;
    }
    h1 {
        font-weight: 900;
    }
    
`;

export default GlobalStyle;
