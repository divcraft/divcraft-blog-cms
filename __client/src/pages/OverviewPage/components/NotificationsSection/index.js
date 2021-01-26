import React, { useState } from 'react';
import { SectionContainer, LoadMoreButton } from 'components';
import { useSelector } from 'react-redux';
import {
  NotificationsList,
  NotificationListItem,
  NotificationText,
  CheckLink,
  ArticleLink,
} from './style';

const NotificationsSection = () => {
  const [notificationsLength, setNotificationLength] = useState(5);
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );
  const finishedArticles = useSelector(
    (state) => state.finishedArticles.articles
  );
  const publishedArticles = finishedArticles.filter(
    (article) => article.isPublished === true
  );
  const notificationsList = notifications
    .map((notification) => {
      const articleData = publishedArticles.find(
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
    .map((item) => {
      const { notificationType, commentsCounter, articleData, _id } = item;
      const spanData = () => {
        if (notificationType === 'newComments') {
          return `Masz ${commentsCounter} nowych komentarzy pod artykułem`;
        } else if (notificationType === 'report') {
          return `Masz nowe zgłoszenie komentarza pod artykułem`;
        }
      };
      return (
        <NotificationListItem key={_id}>
          <NotificationText>
            <span>{spanData()}</span>
            <ArticleLink>{articleData.header.title}</ArticleLink>
          </NotificationText>
          <CheckLink>Sprawdź</CheckLink>
        </NotificationListItem>
      );
    })
    .splice(0, notificationsLength);
  return (
    <SectionContainer title="Aktualności">
      <NotificationsList>{notificationsList}</NotificationsList>
      {notificationsLength <= notificationsList.length && (
        <LoadMoreButton
          onClick={() => setNotificationLength(notificationsLength + 5)}
        />
      )}
    </SectionContainer>
  );
};

export default NotificationsSection;