import styled from 'styled-components';

export const ImageContainer = styled.div`
  margin: 0 auto;
  position: relative;
  min-height: 70px;
  min-width: 240px;
  background-color: ${({ theme: { colors } }) => colors.gray.regular};
  &:hover > div {
    opacity: 1;
  }
`;

export const Image = styled.img`
  display: block;
  object-fit: cover;
`;

export const ImageEditors = styled.div`
  opacity: 0;
  transition: 0.4s;
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 15px;
  left: 15px;
  z-index: 1;
`;
export const ImageSrcInput = styled.input`
  display: none;
`;

export const ImageSrcLabel = styled.label`
  background-color: ${({ theme: { colors } }) => colors.gray.light};
  font-size: 24px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 0 1px 0.5px ${({ theme: { colors } }) => colors.gray.dark};
  text-align: center;
`;

export const ImageAltInput = styled.input`
  margin-left: 15px;
  opacity: 0.7;
  width: 150px;
  padding: 3px;
  border: none;
`;
