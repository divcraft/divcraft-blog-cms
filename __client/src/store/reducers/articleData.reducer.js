import {
  EDIT_HEADER_TITLE,
  EDIT_HEADER_SUBTITLE,
  EDIT_HEADER_IMAGE_URL,
  EDIT_HEADER_IMAGE_ALT,
  UPDATE_ARTICLE_SECTION_LIST,
  UPDATE_ARTICLE,
  CLEAR_ARTICLE_DATA,
} from 'constants';

const initialState = {
  loadingState: null,
  article: {
    header: {
      title: 'Najczęściej wykorzystywane metody na tablicach',
      subtitle: 'Metody używane na tablicach w javascript',
      image: {
        data: '',
        alt: '',
      },
    },
    sections: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
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
    case EDIT_HEADER_IMAGE_URL:
      return {
        ...state,
        article: {
          ...state.article,
          header: {
            ...state.article.header,
            image: {
              ...state.article.header.image,
              data: action.payload,
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
      return {
        ...state,
        article: {
          ...state.article,
          header: {
            ...state.article.header,
            imageUrl: action.payload,
          },
        },
      };
    default:
      return state;
  }
};
