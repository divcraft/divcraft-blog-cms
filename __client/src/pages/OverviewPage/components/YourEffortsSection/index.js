import React from 'react';
import { GrayText } from 'components';
import { SectionContainer } from 'pages/OverviewPage/components';
import { useSelector } from 'react-redux';
import { LineItem, Underline } from './style';

const YourEffortsSection = () => {
  let calcData = {
    writtenArticles: 0,
    totalArticleViews: 0,
    averageRatingOfAllArticles: 0,
    newestPublishedArticle: null,
    bestRatedArticle: null,
    mostPopularArticle: null,
  };
  const finishedArticles = useSelector(
    (state) => state.finishedArticles.articles
  );
  const publishedArticles = finishedArticles.filter(
    (article) => article.isPublished === true
  );
  const setWrittenArticles = () => {
    const writtenArticles = publishedArticles.length;
    return writtenArticles;
  };
  const setAverageRatingOfAllArticles = () => {
    if (publishedArticles.length === 0) return 0;
    const sumOfRatingOfAllArticles =
      publishedArticles.length > 1
        ? publishedArticles.reduce(
            (acc, { averageRating }) => acc + averageRating,
            0
          )
        : publishedArticles[0].averageRating;
    const averageRatingOfAllArticles = (
      sumOfRatingOfAllArticles / publishedArticles.length
    ).toFixed(2);
    return averageRatingOfAllArticles;
  };
  const setNewestPublishedArticle = () => {
    if (publishedArticles.length === 0) return null;
    const newestPublishedArticle = publishedArticles
      .map((article) => {
        const transformatedDate = new Date(article.publicationDate);
        return {
          ...article,
          publicationDate: Date.parse(transformatedDate),
        };
      })
      .sort((a, b) => a.publicationDate - b.publicationDate)
      .reverse()
      .map((article) => ({
        ...article,
        publicationDate: new Date(article.publicationDate),
      }))[0];
    return newestPublishedArticle;
  };
  const setBestRatedArticle = () => {
    if (publishedArticles.length === 0) return null;
    let bestRatedArticle = publishedArticles
      .sort((a, b) => a.averageRating - b.averageRating)
      .reverse()[0];
    bestRatedArticle = {
      ...bestRatedArticle,
      averageRating: bestRatedArticle.averageRating.toFixed(2),
    };
    return bestRatedArticle;
  };
  calcData = {
    ...calcData,
    writtenArticles: setWrittenArticles(),
    averageRatingOfAllArticles: setAverageRatingOfAllArticles(),
    newestPublishedArticle: setNewestPublishedArticle(),
    bestRatedArticle: setBestRatedArticle(),
  };
  const {
    writtenArticles,
    totalArticleViews,
    averageRatingOfAllArticles,
    newestPublishedArticle,
    bestRatedArticle,
    mostPopularArticle,
  } = calcData;
  return (
    <SectionContainer title="Twoje wyniki">
      <LineItem>
        <span>Napisane artykuły:</span>
        <span>{writtenArticles}</span>
      </LineItem>
      <LineItem>
        <span>Łączna ilość odsłon Twoich artykułów:</span>
        <span>{totalArticleViews}</span>
        {/* will be added after getting the blog public */}
      </LineItem>
      <LineItem>
        <span>Średnia ocena za wszystkie artykuły:</span>
        <span>{averageRatingOfAllArticles}</span>
      </LineItem>
      <LineItem>
        <span>Najnowszy opublikowany artykuł:</span>
        {newestPublishedArticle ? (
          <>
            <Underline>{newestPublishedArticle.header.title}</Underline>
            <span>
              ({newestPublishedArticle.publicationDate.getDate()}/
              {newestPublishedArticle.publicationDate.getMonth() + 1 < 10
                ? `0${newestPublishedArticle.publicationDate.getMonth() + 1}`
                : newestPublishedArticle.publicationDate.getMonth() + 1}
              /{newestPublishedArticle.publicationDate.getFullYear()})
            </span>
          </>
        ) : (
          <GrayText>brak opublikowanych artykułów</GrayText>
        )}
      </LineItem>
      <LineItem>
        <span>Najlepiej oceniany artykuł:</span>
        {bestRatedArticle ? (
          <>
            <Underline>{bestRatedArticle.header.title}</Underline>
            <span>({bestRatedArticle.averageRating})</span>
          </>
        ) : (
          <GrayText>brak opublikowanych artykułów</GrayText>
        )}
      </LineItem>
      <LineItem>
        <span>Najpopularniejszy artykuł:</span>
        {mostPopularArticle ? (
          <>
            <Underline>
              Umieszczenie elementów multimedialnych na stronie
            </Underline>
            <span>(0 odsłon)</span>
          </>
        ) : (
          <GrayText>brak opublikowanych artykułów</GrayText>
        )}
        {/* will be added after getting the blog public */}
      </LineItem>
    </SectionContainer>
  );
};

export default YourEffortsSection;
