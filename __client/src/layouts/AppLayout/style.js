import styled from 'styled-components';

export const LayoutContainer = styled.main`
  grid-area: layout;
  & > div:nth-child(2),
  & > div:nth-child(3) {
    height: calc(100vh - 150px);
    overflow-y: scroll;
    position: relative;
  }
`;
