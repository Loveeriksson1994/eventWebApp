import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import logUtil from '@sitevision/api/server/LogUtil';

logUtil.info('här i main');
export default (initialState, el) => {
  ReactDOM.hydrate(
    <App {...initialState} />,
    el
  );
};
