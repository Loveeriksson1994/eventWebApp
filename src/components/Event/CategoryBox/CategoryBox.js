import * as React from "react";
import sorttedDate from "../../App/Logik/Logik.js";


const CategoryBox = (props) => {
    return <div className="sup-eventPuff__categoryBox"> {props.categories}</div>;
};

export default CategoryBox;