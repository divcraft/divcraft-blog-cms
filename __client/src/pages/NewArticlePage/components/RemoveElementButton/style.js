import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transform: rotate(45deg);
  font-size: 18px;
  background-color: white;
  border: solid 1px white;
  color: ${({ theme: { colors } }) => colors.red.regular};
  transition: 0.4s;
  &:hover {
    border: solid 1px ${({ theme: { colors } }) => colors.red.regular};
  }
`;
