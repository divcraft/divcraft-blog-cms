import React from 'react';
import { useSelector } from 'react-redux';
import { GrayText, NotificationsList } from 'components';
import { SectionContainer } from 'pages/OverviewPage/components';

const NotificationsSection = () => {
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );
  return (
    <SectionContainer title="Aktualności">
      {notifications.length !== 0 ? (
        <>
          <NotificationsList pattern="oneUser" />
        </>
      ) : (
        <GrayText>Brak nowych powiadomień</GrayText>
      )}
    </SectionContainer>
  );
};

export default NotificationsSection;
