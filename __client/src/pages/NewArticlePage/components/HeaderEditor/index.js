import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editHeaderTitle,
  editHeaderSubtitle,
  // editHeaderImageUrl,
  editHeaderImageAlt,
} from 'store/actions';
import {
  HeaderContainer,
  TitleInput,
  SubtitleInput,
  ImageContainer,
  Image,
  ImageInput,
  ImageAltInput,
  ImageLabel,
  GrayArea,
} from './style';

const HeaderEditor = () => {
  const dispatch = useDispatch();
  const header = useSelector((state) => state.articleData.article.header);
  const { title, subtitle, image } = header;
  const handleTitle = (e) => {
    dispatch(editHeaderTitle(e.target.value));
  };
  const handleSubtitle = (e) => {
    dispatch(editHeaderSubtitle(e.target.value));
  };
  const handleImageAlt = (e) => {
    dispatch(editHeaderImageAlt(e.target.value));
  };
  return (
    <>
      <HeaderContainer>
        <TitleInput
          value={title}
          onChange={handleTitle}
          placeholder="Tytuł artykułu"
        />
        <SubtitleInput
          value={subtitle}
          onChange={handleSubtitle}
          placeholder="Podtytuł"
        />
        <ImageContainer>
          {image.url ? (
            <>
              <Image src={image.url} alt={image.alt} />
              <ImageAltInput
                onChange={handleImageAlt}
                placeholder="Opis obrazka"
                value={image.alt}
              />
            </>
          ) : (
            <GrayArea />
          )}
          <ImageLabel htmlFor="file-upload">
            +
            <ImageInput type="file" id="file-upload" />
          </ImageLabel>
        </ImageContainer>
      </HeaderContainer>
    </>
  );
};

export default HeaderEditor;
