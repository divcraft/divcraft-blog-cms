import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LinkContainer = styled.div`
  & a:nth-child(2) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

export const StyledFontAwesome = styled(FontAwesomeIcon)`
  width: 15px;
  height: auto;
  margin-right: 5px;
`;

export const IconsContainer = styled.div`
  color: ${({ theme: { colors } }) => colors.gray.dark};
  display: flex;
`;

export const Icon = styled.div`
  margin-right: 10px;
  &:nth-child(1) {
    min-width: 108px;
  }
  &:nth-child(2) {
    min-width: 37px;
  }
  &:nth-child(3) {
    min-width: 60px;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const IconText = styled.span`
  display: inline;
`;
