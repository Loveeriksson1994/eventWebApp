import * as React from 'react';
import sorttedDate from '../../App/Logik/Logik.js';

const list = sorttedDate;

const DateBoxOneDate = (props) => {
    return(
<div className="sup-eventPuff__dateBox">
    
   <time> {props.start} </time> 
</div>
    );
};

export default DateBoxOneDate;