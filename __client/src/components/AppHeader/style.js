import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  grid-area: header;
  background-color: ${({ theme: { colors } }) => colors.blue.dark};
  display: flex;
  align-items: center;
`;

export const LeftSide = styled.div`
  width: 300px;
`;

export const RightSide = styled.div`
  width: auto;
`;

export const NewArticleLink = styled(Link)`
  display: block;
  width: 240px;
  height: 60px;
  background-color: white;
  border-radius: 15px;
  text-align: center;
  line-height: 60px;
  position: relative;
  color: ${({ theme: { colors } }) => colors.gray.darker};
  text-decoration: none;
  font-size: 20px;
  padding-left: 20px;
  &::before {
    content: '';
    position: absolute;
    border-radius: 2px;
    background-color: ${({ theme: { colors } }) => colors.gray.darker};
    top: 50%;
    left: 50px;
    display: block;
    transform: translate(-50%, -50%);
    width: 3px;
    height: 17px;
  }
  &::after {
    content: '';
    position: absolute;
    border-radius: 2px;
    background-color: ${({ theme: { colors } }) => colors.gray.darker};
    top: 50%;
    left: 50px;
    display: block;
    transform: translate(-50%, -50%);
    width: 17px;
    height: 3px;
  }
`;
