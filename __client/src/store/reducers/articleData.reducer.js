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
        title: 'section paragraph',
        items: [
          {
            type: 'PARAGRAPH',
            content:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat odio voluptatibus nemo nulla repellendus! Adipisci maiores recusandae quam quasi modi ea aut fuga nisi incidunt error totam, repellendus voluptates. Rerum!',
          },
        ],
      },
      {
        title: 'section subtitle',
        items: [
          {
            type: 'SUBTITLE',
            content: 'Podtytuł sekcji',
          },
        ],
      },
      {
        title: 'section image',
        items: [
          {
            type: 'IMAGE',
            content: {
              url: '',
              alt: '',
            },
          },
        ],
      },
      {
        title: 'section code',
        items: [
          {
            type: 'CODE',
            content: `
<p>HTML Editor Sample Page</p>
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
</ul>
            `,
          },
        ],
      },
      {
        title: 'section list',
        items: [
          {
            type: 'LIST',
            content: [
              'list item 1',
              'list item 2',
              'list item 3',
              'list item 4',
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
