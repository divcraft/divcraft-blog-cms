import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  LoadMoreButton,
  GrayText,
  LinkButton,
  ListContainer,
  TileListItem,
  LinkText,
} from 'components';
import { SectionContainer } from 'pages/OverviewPage/components';
import { NotificationText } from './style';

const NotificationsSection = ({ pattern }) => {
  const [notificationsLength, setNotificationLength] = useState(3);
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );
  if (pattern === 'allUsers')
    notifications.filter((item) => item.notificationType === 'report');
  const finishedArticles = useSelector(
    (state) => state.finishedArticles.articles
  );
  const publishedArticles = useSelector(
    (state) => state.publishedArticles.articles
  );
  const articleList = useMemo(() => {
    let payload = [];
    if (pattern === 'oneUser') {
      payload = finishedArticles.filter(
        (article) => article.isPublished === true
      );
    } else if (pattern === 'oneUser') {
      payload = publishedArticles;
    }
    return payload;
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
            <TileListItem pattern="small" key={_id}>
              <NotificationText>
                <span>{spanData()}</span>
                <LinkText pattern="underline" to="/">
                  {articleData.header.title}
                </LinkText>
              </NotificationText>
              <LinkButton to="/" pattern="blue">
                Sprawdź
              </LinkButton>
            </TileListItem>
          );
        })
        .splice(0, notificationsLength),
    [notifications, articleList, notificationsLength]
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

NotificationsSection.propTypes = {
  pattern: PropTypes.oneOf(['oneUser', 'allUsers']).isRequired,
};

export default NotificationsSection;
