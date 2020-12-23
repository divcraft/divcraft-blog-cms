import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px calc(100vw - 300px);
  grid-template-rows: 90px calc(100vh - 90px);
  grid-template-areas:
    'header header'
    'menu layout';
`;

export const Header = styled.div`
  grid-area: header;
`;

export const Menu = styled.div`
  grid-area: menu;
`;

export const Layout = styled.div`
  grid-area: layout;
`;
