import {
  EDIT_HEADER_TITLE,
  EDIT_HEADER_SUBTITLE,
  EDIT_HEADER_IMAGE_URL,
  EDIT_HEADER_IMAGE_ALT,
  UPDATE_ARTICLE_SECTION_LIST,
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
        sectionPosition: 1,
        title: 'section paragraph',
        items: [
          {
            itemPosition: 1,
            type: 'LIST',
            content: [
              {
                listItemPosition: 1,
                data: 'list item 1',
              },
              {
                listItemPosition: 2,
                data: 'list item 2',
              },
              {
                listItemPosition: 3,
                data: 'list item 3',
              },
              {
                listItemPosition: 4,
                data: 'list item 4',
              },
            ],
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
    case UPDATE_ARTICLE_SECTION_LIST:
      return {
        ...state,
        article: {
          ...state.article,
          sections: action.payload,
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
