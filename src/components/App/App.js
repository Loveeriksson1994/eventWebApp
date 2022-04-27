import * as React from 'react';
import PropTypes from 'prop-types';
import sorttedDate from './Logik/Logik.js';
import portletContextUtil from '@sitevision/api/server/PortletContextUtil';
import nodeTreeUtil from '@sitevision/api/server/NodeTreeUtil';
import EventPuff from '../Event/EventPuff/EventPuff';



let currentPage = portletContextUtil.getCurrentPage(),
   eventArchive = nodeTreeUtil.getNode(currentPage, '../Evenemang');
const list = sorttedDate;


const App = () => {
  return (
   <EventPuff></EventPuff>
  );
};

App.propTypes = {
  message: PropTypes.string,
  name: PropTypes.string,
};

export default App;
