import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    pageBackground: 'white',
    primaryColor: '#258093',
    secondaryColor: 'black',
};

export const darkTheme = {
    pageBackground: '#282c36',
    primaryColor: '#6195ED',
    secondaryColor: 'lavender',
};

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.pageBackground};
    };
    h1 {
        color: ${(props) => props.theme.primaryColor};
    };
    h3, p {
        color: ${(props) => props.theme.secondaryColor};

    };

`;
