import React from 'react';
import { TitleContainer, Submenu } from 'components';
import { Switch, Redirect, Route } from 'react-router-dom';
// import { ProtectedRoute } from 'utils';
import { ToGettingPublic, EditStage } from './pages';

const WaitingRoomPage = () => {
  return (
    <>
      <TitleContainer title="Poczekalnia" />
      <Submenu />
      <Switch>
        <Route path="/poczekalnia/do-publikacji" component={ToGettingPublic} />
        <Route path="/poczekalnia/tryb-edycji" component={EditStage} />
        <Redirect path="/poczekalnia" to="/poczekalnia/do-publikacji" />
      </Switch>
    </>
  );
};

export default WaitingRoomPage;
