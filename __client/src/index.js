import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (module && module.hot) {
  // eslint-disable-next-line no-console
  console.clear();
  module.hot.accept();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
