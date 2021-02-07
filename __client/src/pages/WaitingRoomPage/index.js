import React from 'react';
import { TitleContainer, Submenu } from 'components';
import { Switch, Redirect, Route, useRouteMatch } from 'react-router-dom';
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
        <Redirect path={path} exact to={`${path}/do-publikacji`} />
        <Redirect to="/przeglad" />
      </Switch>
    </>
  );
};

export default WaitingRoomPage;
