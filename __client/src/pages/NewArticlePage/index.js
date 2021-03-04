import React from 'react';
import { TitleContainer, Wrapper } from 'components';
import { HeaderEditor } from './components';

const NewArticlePage = () => {
  return (
    <>
      <TitleContainer title="Nowy artykuł" />
      <Wrapper>
        <form>
          <HeaderEditor />
        </form>
      </Wrapper>
    </>
  );
};

export default NewArticlePage;
