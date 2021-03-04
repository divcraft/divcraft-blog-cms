import styled from 'styled-components';

export const HeaderContainer = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: auto;
`;

export const ImageContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.gray.regular};
  width: 100%;
  height: 450px;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
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
`;

export const Input = styled.input`
  text-align: center;
  border: none;
  overflow-x: hidden;
  resize: both;
  display: block;
  width: ${(props) =>
    props.value ? props.value.length + 1 : props.placeholder.length}ch;
  max-width: 100%;
`;

export const TitleInput = styled(Input)`
  font-size: 28px;
  font-weight: 500;
  margin: 25px auto 10px;
`;

export const SubtitleInput = styled(Input)`
  font-size: 24px;
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.gray.dark};
  margin: 10px auto 25px;
`;
