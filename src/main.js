import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import logUtil from '@sitevision/api/server/LogUtil';

logUtil.info('Om jag tar bort den här logUtil så renderas inte events..');
export default (initialState, el) => {
  ReactDOM.hydrate(
    <App {...initialState} />,
    el
  );
};