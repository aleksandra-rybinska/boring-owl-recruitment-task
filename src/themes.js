import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    pageBackground: 'white',
    tileBackground: '#E2E3E9',
    primaryColor: '#258093',
    secondaryColor: 'black',
};

export const darkTheme = {
    pageBackground: '#282c36',
    tileBackground: '#181A20',
    primaryColor: '#6195ED',
    secondaryColor: 'lavender',
};

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    };
    body {
        background-color: ${(props) => props.theme.pageBackground};
    };
    h1, h4 {
        color: ${(props) => props.theme.primaryColor};
    };
    h3, p {
        color: ${(props) => props.theme.secondaryColor};

    };
    ul {
        padding: 5px 15px;
        width: 640px;
        list-style: none;
        background-color: ${(props) => props.theme.tileBackground};
        border-radius: 3px;
    }
`;
