import React from 'react';
import PropTypes from 'prop-types';
import { LinkButton, TileListItem, LinkText } from 'components';
import { NotificationText } from './style';

const NotificationsListItem = ({ notification }) => {
  const { notificationType, commentsCounter, articleData, _id } = notification;
  const spanData = () => {
    if (notificationType === 'newComments') {
      const newCommentsCase = () => {
        const counterToString = commentsCounter.toString();
        const lastStringItem = counterToString[counterToString.length - 1];
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
};

NotificationsListItem.propTypes = {
  notification: PropTypes.instanceOf(Object).isRequired,
};

export default NotificationsListItem;
