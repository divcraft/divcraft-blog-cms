import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  LoadMoreButton,
  GrayText,
  LinkButton,
  ListContainer,
  TileListItem,
} from 'components';
import { SectionContainer, ArticleLink } from 'pages/OverviewPage/components';
import { LinkContainer } from './style';

const AwaitingArticlesSection = () => {
  const [awaitingArticlesLength, setAwaitingArticlesLength] = useState(3);
  const finishedArticles = useSelector(
    (state) => state.finishedArticles.articles
  );
  const awaitingArticles = useMemo(
    () => finishedArticles.filter((article) => article.isPublished === false),
    [finishedArticles]
  );
  const awaitingArticlesList = useMemo(
    () =>
      awaitingArticles
        .filter((article) => article.isPublished === false)
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
            <TileListItem pattern="small" key={_id}>
              <ArticleLink>{header.title}</ArticleLink>
              <LinkContainer>
                <LinkButton pattern="blue">Podgląd</LinkButton>
                <LinkButton pattern="white">Edytuj</LinkButton>
              </LinkContainer>
            </TileListItem>
          );
        })
        .splice(0, awaitingArticlesLength),
    [awaitingArticles, awaitingArticlesLength]
  );
  return (
    <SectionContainer title="Artykuły oczekujące na publikację">
      {finishedArticles.length !== 0 ? (
        <>
          <ListContainer>{awaitingArticlesList}</ListContainer>
          {awaitingArticlesLength < awaitingArticles.length && (
            <LoadMoreButton
              onClick={() =>
                setAwaitingArticlesLength(awaitingArticlesLength + 3)
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
