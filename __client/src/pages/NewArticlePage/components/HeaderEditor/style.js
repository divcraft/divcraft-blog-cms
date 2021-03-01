import styled from 'styled-components';

export const HeaderContainer = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  background-color: ${({ theme: { colors } }) => colors.gray.regular};
  width: 100%;
  height: 450px;
  display: block;
  border: none;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  margin: 15px 0 10px;
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.gray.dark};
  margin: 15px 0;
`;
