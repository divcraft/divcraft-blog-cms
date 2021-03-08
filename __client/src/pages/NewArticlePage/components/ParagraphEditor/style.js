import styled from 'styled-components';

export const ParagraphContainer = styled.textarea`
  resize: none;
  overflow: hidden;
  border: hidden;
  margin: 10px 0;
  line-height: 1.5;
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  min-height: 30px;
`;
