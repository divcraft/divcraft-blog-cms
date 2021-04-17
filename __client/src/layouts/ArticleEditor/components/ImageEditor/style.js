import styled, { css } from 'styled-components';
import { Image as CloudinaryImage } from 'cloudinary-react';

export const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  ${({ pattern }) =>
    pattern === 'header' &&
    css`
      height: 450px;
    `}
  ${({ pattern }) =>
    pattern === 'sectionItem' &&
    css`
      min-height: 70px;
      min-width: 240px;
    `}
    &:hover > div {
    opacity: 1;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UploadedImage = styled(CloudinaryImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NoImage = styled.div`
  background-color: ${({ theme: { colors } }) => colors.gray.regular};
  width: 100%;
  height: 100%;
  min-height: 70px;
`;

export const ImageEditors = styled.div`
  opacity: 0;
  transition: 0.4s;
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  bottom: 15px;
  left: 15px;
  z-index: 1;
`;
export const ImageDataInput = styled.input`
  display: none;
`;

export const ImageDataLabel = styled.label`
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
  padding: 3px 7px;
  border: none;
`;
