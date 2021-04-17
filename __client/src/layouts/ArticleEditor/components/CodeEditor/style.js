import styled from 'styled-components';

export const CodeContainer = styled.textarea`
  resize: none;
  overflow: hidden;
  border: none;
  border-top: solid 1px white;
  border-bottom: solid 1px white;
  font-style: 'monotype';
  line-height: 1.5;
  width: 100%;
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  min-height: 30px;
  background-color: ${({ theme: { colors } }) => colors.gray.light};
  padding: 20px;
`;
