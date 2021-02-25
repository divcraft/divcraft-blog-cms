import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  & a:nth-child(2) {
    margin-left: 10px;
  }
  & a:nth-child(3) {
    margin-top: 10px;
  }
`;

export const StyledFontAwesome = styled(FontAwesomeIcon)`
  width: 15px;
  height: auto;
  color: ${({ theme: { colors } }) => colors.yellow.regular};
  ${(props) =>
    !props.isMarked &&
    css`
      color: ${({ theme: { colors } }) => colors.gray.regular};
    `}
`;

export const DataContainer = styled.div`
  & > span {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const StarButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
`;

export const SemiboldText = styled.span`
  font-weight: 500;
`;
