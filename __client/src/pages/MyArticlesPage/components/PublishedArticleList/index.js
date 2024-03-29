import React from 'react';
import { useSelector } from 'react-redux';
import { PublishedArticle } from 'pages/MyArticlesPage/components';
import { ListContainer } from 'components';

const PublishedArticleList = () => {
  const publishedArticles = useSelector(
    (state) => state.publishedArticles.articles
  );
  const allUserComments = useSelector((state) => state.comments.comments);
  const publishedArticlesList = publishedArticles
    .map((article) => {
      const articleComments = allUserComments.filter(
        (comment) => comment.article_id === article._id
      );
      return {
        ...article,
        articleComments,
      };
    })
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
    .map((article) => <PublishedArticle key={article._id} article={article} />);
  return <ListContainer>{publishedArticlesList}</ListContainer>;
};

export default PublishedArticleList;
