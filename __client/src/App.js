import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme, ProtectedRoute } from 'utils';
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
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthentication());
  }, []);
  return (
    <>
      <Link to="/login">login</Link>
      <br />
      <Link to="/przeglad">overview</Link>
      <br />
      <Link to="/moje-artykuly">moje artykuly</Link>
      <br />
      <Link to="/non-existing-page">non-existing page</Link>
      <Switch>
        <Route
          path="/login"
          render={() =>
            isAuthenticated ? <Redirect to="przeglad" /> : <LoginPage />
          }
        />
        <ProtectedRoute path="/przeglad" component={OverviewPage} />
        <ProtectedRoute path="/moje-artykuly" component={MyArticlesPage} />
        <ProtectedRoute path="/poczekalnia" component={WaitingRoomPage} />
        <ProtectedRoute path="/panel-kontaktowy" component={ContactPanelPage} />
        <ProtectedRoute path="/panel-admina" component={AdminPanelPage} />
        <ProtectedRoute path="/nowy-artykul" component={NewArticlePage} />
        <ProtectedRoute path="/moje-konto" component={MyAccountPage} />
        <ProtectedRoute path="/pomoc" component={HelpPage} />
        <Redirect to="/przeglad" />
      </Switch>
    </>
  );
};

export default RootApp;
