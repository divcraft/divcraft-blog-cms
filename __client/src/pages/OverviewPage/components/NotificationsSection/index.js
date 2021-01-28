import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  LoadMoreButton,
  GrayText,
  LinkButton,
  ListContainer,
  SmallTileListItem,
} from 'components';
import { SectionContainer, ArticleLink } from 'pages/OverviewPage/components';
import { NotificationText } from './style';

const NotificationsSection = () => {
  const [notificationsLength, setNotificationLength] = useState(3);
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );
  const finishedArticles = useSelector(
    (state) => state.finishedArticles.articles
  );
  const publishedArticles = useMemo(
    () => finishedArticles.filter((article) => article.isPublished === true),
    [finishedArticles]
  );
  const notificationsList = useMemo(
    () =>
      notifications
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
              const newCommentsCase = () => {
                const counterToString = commentsCounter.toString();
                const lastStringItem =
                  counterToString[counterToString.length - 1];
                if (counterToString === '1') return 'nowy komentarz';
                if (lastStringItem >= 2 && lastStringItem <= 4) {
                  return 'nowe komentarze';
                } else {
                  return 'nowych komentarzy';
                }
              };
              return `Masz ${commentsCounter} ${newCommentsCase()} pod artykułem`;
            } else if (notificationType === 'report') {
              return `Masz nowe zgłoszenie komentarza pod artykułem`;
            }
          };
          return (
            <SmallTileListItem key={_id}>
              <NotificationText>
                <span>{spanData()}</span>
                <ArticleLink>{articleData.header.title}</ArticleLink>
              </NotificationText>
              <LinkButton pattern="blue">Sprawdź</LinkButton>
            </SmallTileListItem>
          );
        })
        .splice(0, notificationsLength),
    [notifications, publishedArticles, notificationsLength]
  );
  return (
    <SectionContainer title="Aktualności">
      {notifications.length !== 0 ? (
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
      )}
    </SectionContainer>
  );
};

export default NotificationsSection;
