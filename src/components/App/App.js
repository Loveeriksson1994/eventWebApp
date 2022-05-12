import * as React from 'react';
import PropTypes from 'prop-types';
import Event from '../Event/Event.js'
import styles from '../Event/Event.scss'

const App = ({ list }) => {
  return (
    <div className={styles.supEventContainer}>
      {list.map(event => (
        <Event event={event}></Event>
      ))}
    </div>
  );
};

App.PropTypes = {
  list: PropTypes.array
}

export default App;