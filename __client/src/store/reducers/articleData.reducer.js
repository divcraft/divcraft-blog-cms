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
  LOADING,
  SUCCESSED,
  FAILED,
} from 'constants';

const initialState = {
  loadingState: null,
  user_id: '',
  category_id: '',
  article: {
    header: {
      title: '',
      subtitle: '',
      image: {
        data: '',
        alt: '',
        isUploaded: false,
      },
    },
    sections: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_ID:
      return {
        ...state,
        user_id: action.payload,
      };
    case EDIT_CATEGORY:
      return {
        ...state,
        category_id: action.payload,
      };
    case EDIT_HEADER_TITLE:
      return {
        ...state,
        article: {
          ...state.article,
          header: {
            ...state.article.header,
            title: action.payload,
          },
        },
      };
    case EDIT_HEADER_SUBTITLE:
      return {
        ...state,
        article: {
          ...state.article,
          header: {
            ...state.article.header,
            subtitle: action.payload,
          },
        },
      };
    case EDIT_HEADER_IMAGE_DATA:
      return {
        ...state,
        article: {
          ...state.article,
          header: {
            ...state.article.header,
            image: {
              ...state.article.header.image,
              data: action.payload,
              isUploaded: false,
            },
          },
        },
      };
    case EDIT_HEADER_IMAGE_ALT:
      return {
        ...state,
        article: {
          ...state.article,
          header: {
            ...state.article.header,
            image: {
              ...state.article.header.image,
              alt: action.payload,
            },
          },
        },
      };
    case UPDATE_ARTICLE_SECTION_LIST:
      return {
        ...state,
        article: {
          ...state.article,
          sections: action.payload,
        },
      };
    case UPDATE_ARTICLE:
      return {
        ...state,
        article: action.payload,
      };
    case CLEAR_ARTICLE_DATA:
      return initialState;
    case FETCH_ARTICLE_DATA_PROMISE:
      return {
        ...state,
        loadingState: LOADING,
      };
    case FETCH_ARTICLE_DATA_SUCCESS:
      return {
        ...action.payload,
        loadingState: SUCCESSED,
      };
    case FETCH_ARTICLE_DATA_FAIL:
      return {
        ...state,
        loadingState: FAILED,
      };
    default:
      return state;
  }
};
