import { createGlobalStyle } from 'styled-components';

import { montserratFont } from './typography';

const GlobalStyle = createGlobalStyle`
        html, body, #__next, main {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
        }

        body {
                padding: 0;
                margin: 0;
                -webkit-font-smoothing: antialiased;
                background-color: ${({ theme }) => theme.colors.background};
                ${montserratFont.style}
        }

        a {
                text-decoration: none;
                display: inline-flex;
                color: unset;
        }

        p {
                hyphens: auto;
        }

        #__next {
                isolation: isolate;
        }


        ::-webkit-scrollbar {
                width: 8px;
        }

        ::-webkit-scrollbar-track {
                background-color: ${({ theme }) => theme.colors.primary.gentle};
                box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        }

        ::-webkit-scrollbar-thumb {
                border-radius: 5px;
                background-color: ${({ theme }) => theme.colors.success.main};
        }
`;

export default GlobalStyle;
