import React, { useMemo } from 'react';
import { GrayText, LinkText } from 'components';
import { SectionContainer } from 'pages/OverviewPage/components';
import { useSelector } from 'react-redux';
import { displayDate } from 'utils';
import { LineItem } from './style';

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
  const publishedArticles = useMemo(
    () => finishedArticles.filter((article) => article.isPublished === true),
    [finishedArticles]
  );
  const setWrittenArticles = useMemo(() => {
    const writtenArticles = publishedArticles.length;
    return writtenArticles;
  }, [publishedArticles]);
  const setAverageRatingOfAllArticles = useMemo(() => {
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
  }, [publishedArticles]);
  const setNewestPublishedArticle = useMemo(() => {
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
  }, [publishedArticles]);
  const setBestRatedArticle = useMemo(() => {
    if (publishedArticles.length === 0) return null;
    let bestRatedArticle = publishedArticles
      .sort((a, b) => a.averageRating - b.averageRating)
      .reverse()[0];
    bestRatedArticle = {
      ...bestRatedArticle,
      averageRating: bestRatedArticle.averageRating.toFixed(2),
    };
    return bestRatedArticle;
  }, [publishedArticles]);
  calcData = {
    ...calcData,
    writtenArticles: setWrittenArticles,
    averageRatingOfAllArticles: setAverageRatingOfAllArticles,
    newestPublishedArticle: setNewestPublishedArticle,
    bestRatedArticle: setBestRatedArticle,
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
            <LinkText pattern="underline" to="/">
              {newestPublishedArticle.header.title}
            </LinkText>
            ({displayDate(newestPublishedArticle.publicationDate)})
          </>
        ) : (
          <GrayText>brak opublikowanych artykułów</GrayText>
        )}
      </LineItem>
      <LineItem>
        <span>Najlepiej oceniany artykuł:</span>
        {bestRatedArticle ? (
          <>
            <LinkText pattern="underline" to="/">
              {bestRatedArticle.header.title}
            </LinkText>
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
            <LinkText pattern="underline" to="/">
              Umieszczenie elementów multimedialnych na stronie
            </LinkText>
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
