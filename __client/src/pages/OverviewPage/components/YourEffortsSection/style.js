import styled from 'styled-components';

export const LineItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
  & * {
    margin-right: 5px;
  }
  & *:last-child {
    margin-right: 0;
  }
`;
