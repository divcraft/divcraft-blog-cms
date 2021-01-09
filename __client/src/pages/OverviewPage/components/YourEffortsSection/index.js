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
  });
  const user = useSelector((state) => state.userData.user);
  useEffect(() => {
    Axios.get(`/api/articles?userId=${user._id}`).then(({ data }) => {
      const publishedArticles = data.filter(
        (article) => article.isPublished === true
      );
      const writtenArticles = publishedArticles.length;
      const sumOfRatingOfAllArticles =
        publishedArticles.length > 1
          ? publishedArticles.reduce(
              (a, b) => a.averageRating + b.averageRating
            )
          : publishedArticles[0].averageRating;
      const averageRatingOfAllArticles = (
        sumOfRatingOfAllArticles / publishedArticles.length
      ).toFixed(2);
      setApiData({
        ...apiData,
        writtenArticles,
        averageRatingOfAllArticles,
      });
    });
  }, []);
  const {
    writtenArticles,
    totalArticleViews,
    averageRatingOfAllArticles,
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
          Dbam o RAM, czyli jak uniknąć przeciążenia przeglądarki
        </Underline>
        <Text>(2/09/2020)</Text>
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
