import styled from 'styled-components';

export const LayoutContainer = styled.main`
  grid-area: layout;
  display: flex;
  flex-direction: column;
  & > div:nth-child(2) {
    margin: 0;
    overflow-y: scroll;
    position: relative;
  }
`;
