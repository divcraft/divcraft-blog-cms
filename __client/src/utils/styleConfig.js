import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
   ${normalize}
   body {
      background-color: ${({ theme: { colors } }) => colors.gray.dark};
      color: white;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.5;
   }
`;

export const theme = {
  colors: {
    gray: {
      dark: '#333333',
      light: '#dddddd',
    },
    blue: '#518bff',
  },
};
