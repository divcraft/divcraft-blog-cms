import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'utils';
import configureStore from 'store';
import { HomePage } from 'pages';

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
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
  );
};

export default RootApp;
