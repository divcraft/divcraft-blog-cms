import React from 'react';
import { ArticleEditor } from 'layouts';
import { TitleContainer } from 'components';
import { TitleButtons } from './components';

const NewArticlePage = () => {
  return (
    <>
      <TitleContainer
        title="Nowy artykuł"
        hasButtons
        TitleButtons={TitleButtons}
      />
      <ArticleEditor />
    </>
  );
};

export default NewArticlePage;
