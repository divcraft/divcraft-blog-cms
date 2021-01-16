import React from 'react';
import { Provider } from 'react-redux';
import Cookies from 'js-cookie';
import {
  BrowserRouter as Router,
  Route,
  Switch,
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
  const userCookie = Cookies.get('user') || null;
  return (
    <Switch>
      <Route
        path="/login"
        render={() => (userCookie ? <Redirect to="przeglad" /> : <LoginPage />)}
      />
      <ProtectedRoute path="/przeglad" component={OverviewPage} />
      <ProtectedRoute path="/moje-artykuly" component={MyArticlesPage} />
      <ProtectedRoute path="/poczekalnia" component={WaitingRoomPage} />
      <ProtectedRoute path="/panel-kontaktowy" component={ContactPanelPage} />
      <ProtectedRoute
        path="/panel-admina"
        component={AdminPanelPage}
        adminAccess
      />
      <ProtectedRoute path="/nowy-artykul" component={NewArticlePage} />
      <ProtectedRoute path="/moje-konto" component={MyAccountPage} />
      <ProtectedRoute path="/pomoc" component={HelpPage} />
      <Redirect to="/przeglad" />
    </Switch>
  );
};

export default RootApp;
