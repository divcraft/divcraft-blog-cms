import React from 'react';
import { useSelector } from 'react-redux';
import { PublishedArticle } from 'pages/MyArticlesPage/components';
import { ListContainer } from 'components';

const PublishedArticleList = () => {
  const publishedArticles = useSelector(
    (state) => state.publishedArticles.articles
  );
  const publishedArticlesList = publishedArticles
    .map((article) => ({
      ...article,
      publicationDate: new Date(article.publicationDate),
    }))
    .map((article) => <PublishedArticle key={article._id} article={article} />);
  return <ListContainer>{publishedArticlesList}</ListContainer>;
};

export default PublishedArticleList;
