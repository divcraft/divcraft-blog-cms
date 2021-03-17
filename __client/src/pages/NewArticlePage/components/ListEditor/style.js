import styled from 'styled-components';

export const ListItemContainer = styled.input`
  border: none;
  resize: both;
  width: ${(props) =>
    props.value ? props.value.length + 1 : props.placeholder.length}ch;
  max-width: 100%;
`;
