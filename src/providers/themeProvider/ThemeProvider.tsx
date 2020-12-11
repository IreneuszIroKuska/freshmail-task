import React, { ReactNode, FC } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from '../../theme/theme';


const GlobalStyle = createGlobalStyle`
    ${reset}
`;

interface props {
    children?: ReactNode;
}

const ThemesProvider:FC<props> = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProvider>
);

export default ThemesProvider;
