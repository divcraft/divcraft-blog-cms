import styled from 'styled-components';

export const LineItem = styled.div`
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
  & span {
    margin-right: 5px;
  }
  & span:last-child {
    margin-right: 0;
  }
`;

export const Text = styled.span``;

export const Underline = styled.span`
  text-decoration: underline;
`;
