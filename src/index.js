import * as React from 'react';
import { renderToString } from 'react-dom/server';
import router from '@sitevision/api/common/router';
import App from './components/App';
import { createEventList } from './Utils/EventHelper.js';

let list = [];
createEventList(list);

router.get('/', (req, res) => {
  
  res.agnosticRender(renderToString(<App list={list}/>), {
    list,
  });
});
