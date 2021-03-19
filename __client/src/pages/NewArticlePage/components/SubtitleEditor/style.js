import styled from 'styled-components';

export const SubtitleContainer = styled.input`
  border: none;
  resize: both;
  display: block;
  width: ${(props) =>
    props.value ? props.value.length + 1 : props.placeholder.length}ch;
  max-width: 100%;
  font-size: 16px;
  font-weight: 600;
`;
