import React from 'react';
import { TitleContainer, Wrapper } from 'components';
import { HeaderEditor } from './components';

const NewArticlePage = () => {
  return (
    <>
      <TitleContainer title="Nowy artykuł" />
      <Wrapper>
        <HeaderEditor />
      </Wrapper>
    </>
  );
};

export default NewArticlePage;
