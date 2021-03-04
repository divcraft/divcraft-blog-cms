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

export const TitleInput = styled.input`
  overflow-x: hidden;
  resize: horizontal;
  display: inline-block;
  font-size: 28px;
  font-weight: 500;
  margin: 15px auto 10px;
  width: auto;
`;

export const SubtitleInput = styled.input`
  display: block;
  font-size: 24px;
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.gray.dark};
  margin: 15px auto;
`;
