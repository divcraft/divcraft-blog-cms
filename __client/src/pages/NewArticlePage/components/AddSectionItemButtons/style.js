import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  & > button {
    margin: 0 10px 10px 0;
    &:last-child {
      margin-right: 0;
    }
  }
`;
