import styled from 'styled-components';

export const SectionTitle = styled.input`
  text-align: center;
  border: none;
  overflow-x: hidden;
  resize: both;
  display: block;
  width: ${(props) =>
    props.value ? props.value.length + 1 : props.placeholder.length}ch;
  max-width: 100%;
  margin: auto;
  font-size: 24px;
  font-weight: 500;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
