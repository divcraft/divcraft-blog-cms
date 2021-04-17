import React from 'react';
import { useParams } from 'react-router-dom';
import { ArticleEditor } from 'layouts';
import { TitleContainer } from 'components';
import { TitleButtons } from './components';

const EditArticlePage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <TitleContainer
        title="Edycja artykułu"
        hasButtons
        TitleButtons={TitleButtons}
      />
      <ArticleEditor />
    </>
  );
};

export default EditArticlePage;
