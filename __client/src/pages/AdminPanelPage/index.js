import React from 'react';
import { TitleContainer, Submenu } from 'components';
import { Switch, Redirect, Route, useRouteMatch } from 'react-router-dom';
import { ToGettingPublic } from './pages';

const AdminPanelPage = () => {
  const { url, path } = useRouteMatch();
  const navConfig = [
    {
      name: 'Do publikacji',
      path: `${url}/do-publikacji`,
    },
    {
      name: 'Zgłoszenia',
      path: `${url}/zgloszenia`,
    },
    {
      name: 'Użytkownicy',
      path: `${url}/uzytkownicy`,
    },
  ];
  return (
    <>
      <div>
        <TitleContainer title="Panel Admina" />
        <Submenu navConfig={navConfig} />
      </div>
      <Switch>
        <Route
          path={`${path}/do-publikacji`}
          exact
          render={() => <ToGettingPublic />}
        />
        <Route
          path={`${path}/zgloszenia`}
          exact
          render={() => <div>reports</div>}
        />
        <Route
          path={`${path}/uzytkownicy`}
          exact
          render={() => <div>users</div>}
        />
        <Redirect path={path} exact to={`${path}/do-publikacji`} />
        <Redirect to="/przeglad" />
      </Switch>
    </>
  );
};

export default AdminPanelPage;
