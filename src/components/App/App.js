import * as React from 'react';
import PropTypes from 'prop-types';
import EventListing from '../EventListing/EventListning.js';
import logUtil from '@sitevision/api/server/LogUtil';

const App = ({list}) => {
  //list.forEach(element => {
    //logUtil.info('det här reppar ett item');
    // logUtil.info(element.startDateForSort);
    // logUtil.info(element.endDateForSort);
    // logUtil.info(element.startDate);
    // logUtil.info(element.endDate);
    // logUtil.info(element.title);
    // logUtil.info(element.category);
    // logUtil.info(element.picture);
    // logUtil.info(element.url);
//});
  return (
    <div>
      {/* {list.map(event =>(
        <p>{event.startDate + ' ' + event.endDate + ' ' +
        event.category + ' ' + event.url}</p>
      ))} */
      /* {list && list.length > 0 (
            <p>hej :)</p>
        )} */}
      <EventListing list={list}></EventListing>
    </div>
  );
};

App.PropTypes = {
  list: PropTypes.any
}

export default App;
