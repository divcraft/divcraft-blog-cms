import React from 'react';
import { TitleContainer, Submenu } from 'components';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import { ToGettingPublic, EditStage } from './pages';

const WaitingRoomPage = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <TitleContainer title="Poczekalnia" />
      <Submenu />
      <Switch>
        <Route path={`${path}/do-publikacji`} component={ToGettingPublic} />
        <Route path={`${path}/tryb-edycji`} component={EditStage} />
        <Redirect to={`${path}/do-publikacji`} />
      </Switch>
    </>
  );
};

export default WaitingRoomPage;
