import styled from 'styled-components';

export const ParagraphContainer = styled.textarea`
  resize: none;
  overflow: hidden;
  border: hidden;
  border-top: solid 1px ${({ theme: { colors } }) => colors.gray.lighter};
  border-bottom: solid 1px ${({ theme: { colors } }) => colors.gray.lighter};
  line-height: 1.5;
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : '24px')};
`;
