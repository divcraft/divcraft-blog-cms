import styled from 'styled-components';

export const LoadMoreButton = styled.button`
  width: 100%;
  background: none;
  display: block;
  margin-top: 12px;
  padding: 5px 0;
  border: none;
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.gray.light};
  color: ${({ theme: { colors } }) => colors.gray.dark};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme: { colors } }) => colors.gray.light};
  }
`;
