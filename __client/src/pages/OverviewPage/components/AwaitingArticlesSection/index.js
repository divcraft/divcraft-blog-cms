import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { SectionContainer, LoadMoreButton, GrayText } from 'components';
import {
  AwaitingArticlesList,
  AwaitingArticleListItem,
  LinkContainer,
  CheckLink,
  ArticleLink,
} from './style';

const AwaitingArticlesSection = () => {
  const [finishedArticlesLength, setFinishedArticlesLength] = useState(3);
  const finishedArticles = useSelector(
    (state) => state.finishedArticles.articles
  );
  const finishedArticlesList = finishedArticles
    .map((article) => {
      const transformatedDate = new Date(article.updatedAt);
      return {
        ...article,
        updatedAt: Date.parse(transformatedDate),
      };
    })
    .sort((a, b) => a.updatedAt - b.updatedAt)
    .reverse()
    .map((article) => {
      const { _id, header } = article;
      return (
        <AwaitingArticleListItem key={_id}>
          <ArticleLink>{header.title}</ArticleLink>
          <LinkContainer>
            <CheckLink>Podgląd</CheckLink>
            <CheckLink>Edytuj</CheckLink>
          </LinkContainer>
        </AwaitingArticleListItem>
      );
    })
    .splice(0, finishedArticlesLength);
  return (
    <SectionContainer title="Artykuły oczekujące na publikację">
      {finishedArticles.length !== 0 ? (
        <>
          <AwaitingArticlesList>{finishedArticlesList}</AwaitingArticlesList>
          {finishedArticlesLength < finishedArticles.length && (
            <LoadMoreButton
              onClick={() =>
                setFinishedArticlesLength(finishedArticlesLength + 3)
              }
            />
          )}
        </>
      ) : (
        <GrayText>Brak oczekujących artykułów</GrayText>
      )}
    </SectionContainer>
  );
};

export default AwaitingArticlesSection;
