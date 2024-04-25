import { createGlobalStyle } from "styled-components";
import { montserratFont } from "./typography";

const GlobalStyle = createGlobalStyle`
    html, body, #__next, main {
        height: 100%;
    }

    body {
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        background-color: ${({theme}) => theme.colors.background};
        ${montserratFont.style}
    }

    a {
        text-decoration: none;
        color: unset;
    }

    p {
        hyphens: auto;
    }

    #__next {
        isolation: isolate;
    }
`;

export default GlobalStyle;
