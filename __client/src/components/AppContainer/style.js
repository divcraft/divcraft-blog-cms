import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px calc(100vw - 250px);
  grid-template-rows: 70px calc(100vh - 70px);
  grid-template-areas:
    'header header'
    'menu layout';
`;
