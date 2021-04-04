import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  editCategory,
  editHeaderTitle,
  editHeaderSubtitle,
  // editHeaderImageData,
  // editHeaderImageAlt,
} from 'store/actions';
import { ImageEditor } from 'pages/NewArticlePage/components';
import {
  HeaderContainer,
  CategorySelect,
  TitleInput,
  SubtitleInput,
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
      <ImageEditor pattern="header" content={image} />
    </HeaderContainer>
  );
};

export default HeaderEditor;
