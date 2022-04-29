import * as React from 'react';
import sorttedDate from '../../App/Utils/EventHelper.js';

const list = sorttedDate;

const TitleBox = (props) => {
    return(
<div className="sup-eventPuff__titleBox">
    {props.title}
</div>
    );
};

export default TitleBox;
