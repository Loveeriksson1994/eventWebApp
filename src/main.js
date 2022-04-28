import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

export default (el) => {
  ReactDOM.hydrate(
    <App/>,
    el
  );
};
