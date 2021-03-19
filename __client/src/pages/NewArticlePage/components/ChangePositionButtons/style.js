import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ArrowButton = styled.button`
  margin: 0;
  padding: 0;
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 25px;
  height: 10px;
  overflow: hidden;
  &:nth-child(1) svg {
    top: 5px;
  }
  &:nth-child(2) svg {
    bottom: 5px;
  }
  &:hover svg {
    opacity: 1;
  }
`;

export const StyledFontAwesome = styled(FontAwesomeIcon)`
  position: relative;
  color: ${({ theme: { colors } }) => colors.gray.dark};
  opacity: 0.5;
`;
