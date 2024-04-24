import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body, #__next, main {
        height: 100%;
    }

    body {
        padding: 0;
        -webkit-font-smoothing: antialiased;
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