import React from 'react';
import { TitleContainer, Wrapper, ListContainer } from 'components';
// import { PublishedArticle } from './components';

const MyArticlesPage = () => {
  return (
    <>
      <TitleContainer title="Moje artykuły" />
      <Wrapper>
        <ListContainer>
          <div>MyArticles</div>
        </ListContainer>
      </Wrapper>
    </>
  );
};

export default MyArticlesPage;
