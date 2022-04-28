import * as React from "react";
import PropTypes from "prop-types";
import sorttedDate from "./Logik/Logik.js";
import portletContextUtil from "@sitevision/api/server/PortletContextUtil";
import nodeTreeUtil from "@sitevision/api/server/NodeTreeUtil";
import EventPuff from "../Event/EventPuff/EventPuff";


const App = () => {
  return <EventPuff></EventPuff>;
};


export default App;
