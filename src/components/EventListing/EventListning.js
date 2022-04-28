import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Eventlistning.css';
import sortedList from '../Logik/SortedList';
import Event from '../Event/Event.js';

const list = sortedList;

const Eventlisting = () => {
    return (
    <div className={styles.supEventContainer}>
        {list.map(event =>(
            <Event event={event}></Event>
        ))}
    </div>
  );
};

 Eventlisting.propTypes = {
   Eventlisting: PropTypes.any,
 };

export default Eventlisting;