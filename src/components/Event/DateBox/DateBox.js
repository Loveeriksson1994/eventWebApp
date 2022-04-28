import * as React from 'react';
import sorttedDate from '../../App/Logik/Logik.js';

const list = sorttedDate;

const DateBox = (props) => {
    if(props.start == props.end){
    return(
<div className="sup-eventPuff__dateBox">
   <time> {props.start} </time> 
</div>
    ); }
    else 
    return(
        <div className="sup-eventPuff__dateBox">
        <time> {props.start} - {props.end} </time> 
     </div> 
    )
};

export default DateBox;