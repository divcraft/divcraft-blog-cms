import styled from 'styled-components';

export const BoxButton = styled.button`
  border: none;
  color: white;
  background-color: ${({ theme: { colors } }) => colors.blue.dark};
  :hover {
    cursor: pointer;
  }
`;

export const TextButton = styled.button`
  border: none;
  color: ${({ theme: { colors } }) => colors.gray.dark};
  background: none;
  margin-top: 15px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
