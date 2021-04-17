import styled from 'styled-components';

export const ListElementsContainer = styled.div`
  & ul {
    margin-bottom: 0;
  }
  & > :last-child {
    opacity: 0;
    transition: 0.3s;
  }
  &:hover > :last-child {
    opacity: 1;
  }
`;

export const ListItem = styled.li`
  position: relative;
  & > button {
    transition: 0.3s;
    opacity: 0;
  }
  &:hover > button {
    opacity: 1;
  }
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
`;
