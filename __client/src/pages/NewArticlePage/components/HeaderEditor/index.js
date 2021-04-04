import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editCategory,
  editHeaderTitle,
  editHeaderSubtitle,
  editHeaderImageData,
  editHeaderImageAlt,
} from 'store/actions';
import {
  HeaderContainer,
  CategorySelect,
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
  const categories = useSelector((state) => state.categories.categories);
  const { title, subtitle, image } = header;
  const handleCategory = (e) => {
    dispatch(editCategory(e.target.value));
  };
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
  const categoriesList = categories.map((category) => (
    <option key={category._id} value={category._id}>
      {category.name}
    </option>
  ));
  return (
    <HeaderContainer>
      <CategorySelect onChange={handleCategory} name="kategoria">
        <option value="">kategoria</option>
        {categoriesList}
      </CategorySelect>
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
