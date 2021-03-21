import styled from 'styled-components';

export const ListItem = styled.li`
  position: relative;
`;

export const ListItemInput = styled.input`
  border: none;
  resize: both;
  width: ${(props) =>
    props.value ? props.value.length + 1 : props.placeholder.length}ch;
  max-width: 100%;
`;

export const AddListItemButton = styled.button`
  margin-left: 21px;
  margin-top: 5px;
  width: 15px;
  height: 15px;
  line-height: 15px;
  background: none;
  border: none;
  display: block;
  padding: 0;
  cursor: pointer;
  color: darkgreen;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;
