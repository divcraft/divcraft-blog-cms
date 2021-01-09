import React, { useState, useEffect } from 'react';
import { SectionContainer } from 'components';
import { useSelector } from 'react-redux';
import Axios from 'axios';
import { LineItem, Text, Underline } from './style';

const YouEffortsSection = () => {
  const [apiData, setApiData] = useState({
    writtenArticles: null,
    totalArticleViews: 0,
    averageRatingOfAllArticles: null,
    newestPublishedArticle: null,
  });
  const user = useSelector((state) => state.userData.user);
  useEffect(() => {
    Axios.get(`/api/articles?userId=${user._id}`).then(({ data }) => {
      const publishedArticles = data.filter(
        (article) => article.isPublished === true
      );
      // console.log({ publishedArticles });

      const writtenArticles = publishedArticles.length;

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

      const newestPublishedArticle = publishedArticles
        .map((article) => {
          const transformatedDate = new Date(article.publicationDate);
          return {
            ...article,
            publicationDate: Date.parse(transformatedDate),
          };
        })
        .sort((a, b) => a.publicationDate + b.publicationDate)
        .map((article) => {
          // const transformatedDate = new Date(article.publicationDate);
          return {
            ...article,
            publicationDate: new Date(article.publicationDate),
          };
        })[0];

      setApiData({
        ...apiData,
        writtenArticles,
        averageRatingOfAllArticles,
        newestPublishedArticle,
      });
    });
  }, []);
  const {
    writtenArticles,
    totalArticleViews,
    averageRatingOfAllArticles,
    newestPublishedArticle,
  } = apiData;
  console.log(apiData);
  return (
    <SectionContainer title="Twoje wyniki">
      <LineItem>
        <Text>Napisane artykuły:</Text>
        <Text>{writtenArticles}</Text>
      </LineItem>
      <LineItem>
        <Text>Łączna ilość odsłon Twoich artykułów:</Text>
        <Text>{totalArticleViews}</Text>{' '}
        {/* will be added after getting the blog public */}
      </LineItem>
      <LineItem>
        <Text>Średnia ocena za wszystkie artykuły:</Text>
        <Text>{averageRatingOfAllArticles}</Text>
      </LineItem>
      <LineItem>
        <Text>Najnowszy opublikowany artykuł:</Text>
        <Underline>
          {newestPublishedArticle && newestPublishedArticle.header.title}
        </Underline>
        <Text>
          (
          {newestPublishedArticle &&
            newestPublishedArticle.publicationDate.getDay()}
          /
          {newestPublishedArticle &&
            (newestPublishedArticle.publicationDate.getMonth() + 1 < 10
              ? `0${newestPublishedArticle.publicationDate.getMonth() + 1}`
              : newestPublishedArticle.publicationDate.getMonth() + 1)}
          /
          {newestPublishedArticle &&
            newestPublishedArticle.publicationDate.getFullYear()}
          )
        </Text>
      </LineItem>
      <LineItem>
        <Text>Najlepiej oceniany artykuł:</Text>
        <Underline>Umieszczenie elementów multimedialnych na stronie</Underline>
        <Text>(4,9)</Text>
      </LineItem>
      <LineItem>
        <Text>Najpopularniejszy artykuł:</Text>
        <Underline>Umieszczenie elementów multimedialnych na stronie</Underline>
        <Text>(0 odsłon)</Text>{' '}
        {/* will be added after getting the blog public */}
      </LineItem>
    </SectionContainer>
  );
};

export default YouEffortsSection;
