import React from 'react';
import { SectionContainer } from 'components';
import {
  NotificationsList,
  NotificationListItem,
  NotificationText,
  CheckLink,
  ArticleLink,
} from './style';

const NotificationsSection = () => {
  return (
    <SectionContainer title="Aktualności">
      <NotificationsList>
        <NotificationListItem>
          <NotificationText>
            <span>Masz 5 nowych komentarzy pod artykułem</span>
            <ArticleLink>
              27-letnia Polka z Raciczek Dolnych szczerze po trzech dniach od
              szczepienia na covid-19
            </ArticleLink>
          </NotificationText>
          <CheckLink>Sprawdź</CheckLink>
        </NotificationListItem>
        <NotificationListItem>
          <NotificationText>
            <span>Masz 5 nowych komentarzy pod artykułem</span>
            <ArticleLink>
              27-letnia Polka z Raciczek Dolnych szczerze po trzech dniach od
              szczepienia na covid-19
            </ArticleLink>
          </NotificationText>
          <CheckLink>Sprawdź</CheckLink>
        </NotificationListItem>
        <NotificationListItem>
          <NotificationText>
            <span>Masz 5 nowych komentarzy pod artykułem</span>
            <ArticleLink>
              27-letnia Polka z Raciczek Dolnych szczerze po trzech dniach od
              szczepienia na covid-19
            </ArticleLink>
          </NotificationText>
          <CheckLink>Sprawdź</CheckLink>
        </NotificationListItem>
        <NotificationListItem>
          <NotificationText>
            <span>Masz 5 nowych komentarzy pod artykułem</span>
            <ArticleLink>
              27-letnia Polka z Raciczek Dolnych szczerze po trzech dniach od
              szczepienia na covid-19
            </ArticleLink>
          </NotificationText>
          <CheckLink>Sprawdź</CheckLink>
        </NotificationListItem>
      </NotificationsList>
    </SectionContainer>
  );
};

export default NotificationsSection;
