import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { UnpublishedArticle } from 'pages/WaitingRoomPage/components';
import { ListContainer } from 'components';

const UnpublishedArticleList = ({ pattern }) => {
  let articles = [];
  if (pattern === 'toGettingPublic') {
    articles = useSelector((state) => state.unpublishedArticles.articles);
  } else if (pattern === 'toEdit') {
    articles = useSelector((state) => state.toEditArticles.articles);
  }
  const articlesList = articles
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
