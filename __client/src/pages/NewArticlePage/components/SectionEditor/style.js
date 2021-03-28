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
  margin-bottom: 15px;
`;

export const ContentContainer = styled.div`
  width: ${({ pattern }) => (pattern === 'IMAGE' ? 'auto' : '100%')};
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }
  & > div:first-child {
    transition: 0.3s;
    opacity: 0;
  }
  &:hover > div:first-child {
    opacity: 1;
  }
`;

export const TitleContainer = styled.div`
  position: relative;
  & > div {
    transition: 0.3s;
    opacity: 0;
  }
  &:hover > div {
    opacity: 1;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
