import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Eventlistning.css';
import Event from '../Event/Event.js';

const Eventlisting = ({list}) => {
  
  //lägg till state som props - kanske görs i categoryList får se. kolla länkarna
  //parent sätter statet och passar det till childs
  return (
    <div className={styles.supEventContainer}>
        {list.map(event =>(
            <Event event={event}></Event>
        ))}
    </div>
  );
};

 Eventlisting.propTypes = {
   list: PropTypes.any,
 };

export default Eventlisting;