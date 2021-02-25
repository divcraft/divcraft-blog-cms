import React from 'react';
import { TitleContainer, Submenu } from 'components';
import { Switch, Redirect, Route, useRouteMatch } from 'react-router-dom';
import { ToGettingPublic, EditStage } from './pages';

const WaitingRoomPage = () => {
  const { url, path } = useRouteMatch();
  const navConfig = [
    {
      name: 'Do publikacji',
      path: `${url}/do-publikacji`,
    },
    {
      name: 'Tryb edycji',
      path: `${url}/tryb-edycji`,
    },
  ];
  return (
    <>
      <TitleContainer title="Poczekalnia" />
      <Submenu navConfig={navConfig} />
      <Switch>
        <Route
          path={`${path}/do-publikacji`}
          exact
          render={() => <ToGettingPublic />}
        />
        <Route
          path={`${path}/tryb-edycji`}
          exact
          render={() => <EditStage />}
        />
        <Redirect path={path} exact to={`${path}/do-publikacji`} />
        <Redirect to="/przeglad" />
      </Switch>
    </>
  );
};

export default WaitingRoomPage;
