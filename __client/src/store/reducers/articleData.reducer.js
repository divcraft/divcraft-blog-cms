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
            type: 'PARAGRAPH',
            content:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat odio voluptatibus nemo nulla repellendus! Adipisci maiores recusandae quam quasi modi ea aut fuga nisi incidunt error totam, repellendus voluptates. Rerum!',
          },
        ],
      },
      {
        sectionPosition: 2,
        title: 'section subtitle',
        items: [
          {
            itemPosition: 1,
            type: 'SUBTITLE',
            content: 'Podtytuł sekcji',
          },
        ],
      },
      {
        sectionPosition: 3,
        title: 'section image',
        items: [
          {
            itemPosition: 1,
            type: 'IMAGE',
            content: {
              url: '',
              alt: '',
            },
          },
        ],
      },
      {
        sectionPosition: 4,
        title: 'section code',
        items: [
          {
            itemPosition: 1,
            type: 'CODE',
            content: `<p>HTML Editor Sample Page</p>
<h2>HTML Editor</h2>
<p>You can use this online HTML editor to generate HTML code for your own website. You can do all sorts of 
things with this HTML editor, such as:</p>
<ul>
    <li>Create <strong>bold</strong> or <em>italic</em> text.</li>
    <li>Change the <span style="color:#800000">text color</span></li>
    <li>Change the <span style="font-family:comic sans ms,cursive">font family</span> or <span style="font-
size:12px">font size</span></li>
    <li>Create <a href="#">hyperlinks</a></li>
    <li>Create a bulleted list...</li>
    <li>...and much more!</li>
</ul>`,
          },
        ],
      },
      {
        sectionPosition: 5,
        title: 'section list',
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
