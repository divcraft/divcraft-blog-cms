import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const Text = styled.span``;

export const Underline = styled(Link)`
  display: block;
  color: black;
`;
