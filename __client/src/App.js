import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'utils';
import configureStore from 'store';
import {
  LoginPage,
  OverviewPage,
  MyArticlesPage,
  WaitingRoomPage,
  ContactPanelPage,
  AdminPanelPage,
  NewArticlePage,
  MyAccountPage,
  HelpPage,
} from 'pages';
import { checkAuthentication } from 'store/actions';

const store = configureStore();

const RootApp = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </Provider>
    </>
  );
};

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthentication());
  }, []);
  return (
    <Switch>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <Route path="/przeglad">
        <OverviewPage />
      </Route>
      <Route path="/moje-artykuly">
        <MyArticlesPage />
      </Route>
      <Route path="/poczekalnia">
        <WaitingRoomPage />
      </Route>
      <Route path="/panel-kontaktowy">
        <ContactPanelPage />
      </Route>
      <Route path="/panel-admina">
        <AdminPanelPage />
      </Route>
      <Route path="/nowy-artykul">
        <NewArticlePage />
      </Route>
      <Route path="/moje-konto">
        <MyAccountPage />
      </Route>
      <Route path="/pomoc">
        <HelpPage />
      </Route>
    </Switch>
  );
};

export default RootApp;
