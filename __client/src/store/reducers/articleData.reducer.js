import {
  EDIT_HEADER_TITLE,
  EDIT_HEADER_SUBTITLE,
  EDIT_HEADER_IMAGE_URL,
  EDIT_HEADER_IMAGE_ALT,
  CLEAR_ARTICLE_DATA,
  // LOADING,
  // SUCCESSED,
  // FAILED,
} from 'constants';

const initialState = {
  loadingState: null,
  article: {
    header: {
      title: '',
      subtitle: '',
      image: {
        url: '',
        alt: '',
      },
    },
    sections: [
      {
        title: 'section title',
        items: [
          {
            type: 'PARAGRAPH',
            content: '',
          },
        ],
      },
      {
        title: 'section title',
        items: [
          {
            type: 'SUBTITLE',
            content: '',
          },
        ],
      },
      {
        title: 'section title',
        items: [
          {
            type: 'IMAGE',
            content: '',
          },
        ],
      },
      {
        title: 'section title',
        items: [
          {
            type: 'CODE',
            content: '',
          },
        ],
      },
      {
        title: 'section title',
        items: [
          {
            type: 'LIST',
            content: [],
          },
        ],
      },
    ],
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
              url: action.payload,
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
