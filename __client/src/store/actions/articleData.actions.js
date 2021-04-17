import Axios from 'axios';
import {
  ADD_USER_ID,
  EDIT_CATEGORY,
  EDIT_HEADER_TITLE,
  EDIT_HEADER_SUBTITLE,
  EDIT_HEADER_IMAGE_DATA,
  EDIT_HEADER_IMAGE_ALT,
  UPDATE_ARTICLE_SECTION_LIST,
  UPDATE_ARTICLE,
  CLEAR_ARTICLE_DATA,
  FETCH_ARTICLE_DATA_PROMISE,
  FETCH_ARTICLE_DATA_SUCCESS,
  FETCH_ARTICLE_DATA_FAIL,
} from 'constants';

export const addUserId = (userId) => {
  return {
    type: ADD_USER_ID,
    payload: userId,
  };
};

export const editCategory = (categoryId) => {
  return {
    type: EDIT_CATEGORY,
    payload: categoryId,
  };
};

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

export const editHeaderImageData = (imageData) => {
  return {
    type: EDIT_HEADER_IMAGE_DATA,
    payload: imageData,
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

export const updateArticle = (article) => {
  return {
    type: UPDATE_ARTICLE,
    payload: article,
  };
};

export const fetchArticleData = (articleId) => (dispatch) => {
  dispatch({
    type: FETCH_ARTICLE_DATA_PROMISE,
  });
  Axios.get(`/api/articles/${articleId}`)
    .then((res) => {
      dispatch({
        type: FETCH_ARTICLE_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_ARTICLE_DATA_FAIL,
      });
      throw err;
    });
};

export const clearArticleData = () => {
  return {
    type: CLEAR_ARTICLE_DATA,
  };
};
