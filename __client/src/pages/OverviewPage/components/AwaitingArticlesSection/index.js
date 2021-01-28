import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  LoadMoreButton,
  GrayText,
  LinkButton,
  ListContainer,
  SmallTileListItem,
} from 'components';
import { SectionContainer, ArticleLink } from 'pages/OverviewPage/components';
import { LinkContainer } from './style';

const AwaitingArticlesSection = () => {
  const [finishedArticlesLength, setFinishedArticlesLength] = useState(3);
  const finishedArticles = useSelector(
    (state) => state.finishedArticles.articles
  );
  const finishedArticlesList = useMemo(
    () =>
      finishedArticles
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
            <SmallTileListItem key={_id}>
              <ArticleLink>{header.title}</ArticleLink>
              <LinkContainer>
                <LinkButton pattern="blue">Podgląd</LinkButton>
                <LinkButton pattern="white">Edytuj</LinkButton>
              </LinkContainer>
            </SmallTileListItem>
          );
        })
        .splice(0, finishedArticlesLength),
    [finishedArticles, finishedArticlesLength]
  );
  return (
    <SectionContainer title="Artykuły oczekujące na publikację">
      {finishedArticles.length !== 0 ? (
        <>
          <ListContainer>{finishedArticlesList}</ListContainer>
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
