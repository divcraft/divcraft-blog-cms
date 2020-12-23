import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  grid-area: header;
  background-color: ${({ theme: { colors } }) => colors.blue.dark};
  display: flex;
  align-items: center;
`;

export const LeftSide = styled.div`
  width: 300px;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const UserWindow = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const UserName = styled.div`
  text-align: right;
  color: white;
  margin-right: 10px;
`;

export const UserPhoto = styled.div`
  display: block;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  color: ${({ theme: { colors } }) => colors.gray.darker};
  background-color: white;
  text-align: center;
  line-height: 45px;
  font-size: 24px;
`;
