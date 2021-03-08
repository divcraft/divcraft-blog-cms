import styled from 'styled-components';

export const ImageContainer = styled.div`
  margin: 10px auto;
  width: 100px;
  height: 100px;
  position: relative;
`;

export const Image = styled.img`
  width: auto;
  height: auto;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const ImageLabel = styled.label`
  background-color: ${({ theme: { colors } }) => colors.gray.light};
  position: absolute;
  z-index: 1;
  font-size: 24px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 12px;
  border: none;
  bottom: 30px;
  left: 30px;
  box-shadow: 0 0 1px 0.5px ${({ theme: { colors } }) => colors.gray.dark};
  text-align: center;
`;

export const ImageAltInput = styled.input`
  text-align: center;
  opacity: 0.7;
  width: ${(props) =>
    props.value ? props.value.length + 1 : props.placeholder.length}ch;
  position: absolute;
  padding: 3px;
  border: none;
  bottom: 35px;
  left: 100px;
`;

export const GrayArea = styled.div`
  width: 100%;
  height: 100%;
`;
