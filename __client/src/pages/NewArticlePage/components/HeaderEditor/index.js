import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editHeaderTitle,
  editHeaderSubtitle,
  editHeaderImageData,
  editHeaderImageAlt,
} from 'store/actions';
import {
  HeaderContainer,
  TitleInput,
  SubtitleInput,
  ImageContainer,
  Image,
  UploadedImage,
  ImageInput,
  ImageAltInput,
  ImageLabel,
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
  const handleImageData = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        dispatch(editHeaderImageData(reader.result));
      });
      reader.readAsDataURL(file);
    }
  };
  return (
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
        {image.isUploaded ? (
          <UploadedImage
            alt={image.alt}
            cloudName="dmlal5qyb"
            publicId={image.data}
            width="1200"
            crop="scale"
          />
        ) : (
          <Image src={image.data} alt={image.alt} />
        )}
        <ImageAltInput
          onChange={handleImageAlt}
          placeholder="Opis obrazka"
          value={image.alt}
        />
        <ImageLabel htmlFor="file-upload">
          +
          <ImageInput type="file" id="file-upload" onChange={handleImageData} />
        </ImageLabel>
      </ImageContainer>
    </HeaderContainer>
  );
};

export default HeaderEditor;
