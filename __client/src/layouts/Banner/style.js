import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 600px;
  text-align: center;
  margin: 20px auto 0;
`;

export const Logo = styled.img`
  width: 80%;
  max-width: 300px;
`;

export const Header = styled.h1`
  font-size: 32px;
  color: ${({ theme: { colors } }) => colors.blue};
`;

export const Describe = styled.p`
  font-size: 20px;
  padding: 10px 0;
`;

export const Footer = styled.div`
  font-size: 20px;
  font-family: monospace;
  color: ${({ theme: { colors } }) => colors.gray.light};
  & div a {
    color: ${({ theme: { colors } }) => colors.gray.light};
    text-decoration: none;
  }
`;
