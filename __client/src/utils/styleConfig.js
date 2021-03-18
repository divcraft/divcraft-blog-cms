import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
   ${normalize}
   body {
      font-family: 'Poppins', sans-serif;
   };
   * {
      box-sizing: border-box;
      line-height: 1.5;
      scrollbar-width: none;
      outline: 0px !important;
      &::-webkit-scrollbar {
        display: none;
    }   
   }
`;

export const theme = {
  colors: {
    gray: {
      darker: '#444444',
      dark: '#707070',
      regular: '#D9D9D9',
      light: '#F2F2F2',
      lighter: '#FBFBFB',
    },
    blue: {
      dark: '#3E6D9D',
      regular: '#5598C5',
    },
    yellow: {
      regular: '#e6e600',
    },
    red: {
      regular: '#FF8484',
    },
  },
};
