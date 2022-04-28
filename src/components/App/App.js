import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './App.scss';
import EventListing from '../EventListing/EventListning.js';

const App = ({ message, name }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {message} {name}
      </p>
      <EventListing></EventListing>
    </div>
  );
};

App.propTypes = {
  message: PropTypes.string,
  name: PropTypes.string,
};

export default App;
