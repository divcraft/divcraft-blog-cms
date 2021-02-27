import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  NotificationsListItem,
  LoadMoreButton,
  GrayText,
  ListContainer,
} from 'components';

const NotificationsList = ({ pattern }) => {
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );
  const finishedArticles = useSelector(
    (state) => state.finishedArticles.articles
  );
  const publishedArticles = useSelector(
    (state) => state.publishedArticles.articles
  );
  const [notificationsLength, setNotificationLength] = useState(
    pattern === 'oneUser' ? 3 : notifications.length
  );
  const articleList = useMemo(() => {
    let articles = [];
    if (pattern === 'oneUser') {
      articles = finishedArticles.filter(
        (article) => article.isPublished === true
      );
    } else if (pattern === 'allUsers') {
      articles = publishedArticles;
    }
    return articles;
  }, [finishedArticles, publishedArticles]);
  const notificationsList = useMemo(
    () =>
      notifications
        .map((notification) => {
          const articleData = articleList.find(
            (article) => article._id === notification.article_id
          );
          const transformatedDate = new Date(notification.updatedAt);
          return {
            ...notification,
            articleData,
            updatedAt: Date.parse(transformatedDate),
          };
        })
        .sort((a, b) => a.updatedAt - b.updatedAt)
        .reverse()
        .splice(0, notificationsLength)
        .map((item) => (
          <NotificationsListItem key={item._id} notification={item} />
        )),
    [notifications, articleList, notificationsLength]
  );
  return notifications.length !== 0 ? (
    <>
      <ListContainer>{notificationsList}</ListContainer>
      {notificationsLength < notifications.length && (
        <LoadMoreButton
          onClick={() => setNotificationLength(notificationsLength + 3)}
        />
      )}
    </>
  ) : (
    <GrayText>Brak nowych powiadomień</GrayText>
  );
};

NotificationsList.propTypes = {
  pattern: PropTypes.oneOf(['oneUser', 'allUsers']).isRequired,
};

export default NotificationsList;
