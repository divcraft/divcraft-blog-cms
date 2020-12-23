import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px calc(100vw - 300px);
  grid-template-rows: 90px calc(100vh - 90px);
  grid-template-areas:
    'header header'
    'menu layout';
`;
