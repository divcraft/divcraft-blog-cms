import React, { useState, useEffect } from 'react';
import { SectionContainer } from 'components';
import { useSelector } from 'react-redux';
import { LineItem, Text, Underline } from './style';

const YourEffortsSection = () => {
  const [sectionData, setSectionData] = useState({
    isCalculated: false,
    data: {
      writtenArticles: null,
      totalArticleViews: 0,
      averageRatingOfAllArticles: null,
      newestPublishedArticle: null,
      bestRatedArticle: null,
    },
  });
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
    const newestPublishedArticle = publishedArticles
      .map((article) => {
        const transformatedDate = new Date(article.publicationDate);
        return {
          ...article,
          publicationDate: Date.parse(transformatedDate),
        };
      })
      .sort((a, b) => a.publicationDate + b.publicationDate)
      .map((article) => ({
        ...article,
        publicationDate: new Date(article.publicationDate),
      }))[0];
    return newestPublishedArticle;
  };
  const setBestRatedArticle = () => {
    const bestRatedArticle = publishedArticles.sort(
      (a, b) => a.averageRating + b.averageRating
    )[0];
    return bestRatedArticle;
  };
  useEffect(() => {
    setSectionData({
      isCalculated: true,
      data: {
        ...sectionData.data,
        writtenArticles: setWrittenArticles(),
        averageRatingOfAllArticles: setAverageRatingOfAllArticles(),
        newestPublishedArticle: setNewestPublishedArticle(),
        bestRatedArticle: setBestRatedArticle(),
      },
    });
  }, []);
  const {
    writtenArticles,
    totalArticleViews,
    averageRatingOfAllArticles,
    newestPublishedArticle,
    bestRatedArticle,
  } = sectionData.data;
  const { isCalculated } = sectionData;
  return (
    isCalculated && (
      <SectionContainer title="Twoje wyniki">
        <LineItem>
          <Text>Napisane artykuły:</Text>
          <Text>{writtenArticles}</Text>
        </LineItem>
        <LineItem>
          <Text>Łączna ilość odsłon Twoich artykułów:</Text>
          <Text>{totalArticleViews}</Text>
          {/* will be added after getting the blog public */}
        </LineItem>
        <LineItem>
          <Text>Średnia ocena za wszystkie artykuły:</Text>
          <Text>{averageRatingOfAllArticles}</Text>
        </LineItem>
        <LineItem>
          <Text>Najnowszy opublikowany artykuł:</Text>
          <Underline>{newestPublishedArticle.header.title}</Underline>
          <Text>
            ({newestPublishedArticle.publicationDate.getDay()}/
            {newestPublishedArticle.publicationDate.getMonth() + 1 < 10
              ? `0${newestPublishedArticle.publicationDate.getMonth() + 1}`
              : newestPublishedArticle.publicationDate.getMonth() + 1}
            /{newestPublishedArticle.publicationDate.getFullYear()})
          </Text>
        </LineItem>
        <LineItem>
          <Text>Najlepiej oceniany artykuł:</Text>
          <Underline>{bestRatedArticle.header.title}</Underline>
          <Text>({bestRatedArticle.averageRating})</Text>
        </LineItem>
        <LineItem>
          <Text>Najpopularniejszy artykuł:</Text>
          <Underline>
            Umieszczenie elementów multimedialnych na stronie
          </Underline>
          <Text>(0 odsłon)</Text>
          {/* will be added after getting the blog public */}
        </LineItem>
      </SectionContainer>
    )
  );
};

export default YourEffortsSection;
