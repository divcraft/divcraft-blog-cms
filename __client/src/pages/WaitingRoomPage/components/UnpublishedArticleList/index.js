import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { UnpublishedArticle } from 'pages/WaitingRoomPage/components';
import { ListContainer } from 'components';

const UnpublishedArticleList = ({ pattern }) => {
  let articles = [];
  if (pattern === 'toGettingPublic') {
    articles = useSelector((state) => state.toGettingPublicArticles.articles);
  } else if (pattern === 'toEdit') {
    articles = useSelector((state) => state.toEditArticles.articles);
  }
  const articlesList = articles
    .map((article) => {
      const transformatedDate = new Date(article.updatedAt);
      return {
        ...article,
        updatedAt: Date.parse(transformatedDate),
      };
    })
    .sort((a, b) => a.updatedAt - b.updatedAt)
    .reverse()
    .map((article) => ({
      ...article,
      updatedAt: new Date(article.updatedAt),
    }))
    .map((article) => (
      <UnpublishedArticle
        key={article._id}
        article={article}
        pattern={pattern}
      />
    ));
  return <ListContainer>{articlesList}</ListContainer>;
};

UnpublishedArticleList.propTypes = {
  pattern: PropTypes.oneOf(['toGettingPublic', 'toEdit']).isRequired,
};

export default UnpublishedArticleList;
