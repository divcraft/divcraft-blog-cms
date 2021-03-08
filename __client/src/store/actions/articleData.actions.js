import {
  EDIT_HEADER_TITLE,
  EDIT_HEADER_SUBTITLE,
  EDIT_HEADER_IMAGE_URL,
  EDIT_HEADER_IMAGE_ALT,
  UPDATE_ARTICLE_SECTION_LIST,
  CLEAR_ARTICLE_DATA,
} from 'constants';

export const editHeaderTitle = (title) => {
  return {
    type: EDIT_HEADER_TITLE,
    payload: title,
  };
};

export const editHeaderSubtitle = (subtitle) => {
  return {
    type: EDIT_HEADER_SUBTITLE,
    payload: subtitle,
  };
};

export const editHeaderImageUrl = (imageUrl) => {
  return {
    type: EDIT_HEADER_IMAGE_URL,
    payload: imageUrl,
  };
};

export const editHeaderImageAlt = (imageAlt) => {
  return {
    type: EDIT_HEADER_IMAGE_ALT,
    payload: imageAlt,
  };
};

export const updateArticleSectionList = (sectionList) => {
  return {
    type: UPDATE_ARTICLE_SECTION_LIST,
    payload: sectionList,
  };
};

export const clearArticleData = () => {
  return {
    type: CLEAR_ARTICLE_DATA,
  };
};
