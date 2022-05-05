import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Eventlistning.css';
import Event from '../Event/Event.js';


const Eventlisting = ({list}) => {
  let categoryList = categoryList();
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

 //Undersök denna och App.js :) Lycka till..

export default Eventlisting;