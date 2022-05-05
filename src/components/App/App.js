import * as React from 'react';
import PropTypes from 'prop-types';
import EventListing from '../EventListing/EventListning.js';
import logUtil from '@sitevision/api/server/LogUtil';
import Categories from '../Categories/Categories.js';
//import { categoryList, categoryList } from '../../Utils/CategoryHelper.js'

const App = ({list}) => {
  
  let categoryList = categoryList();
  function sortList() {
    let newList = [];
    list.forEach(element => {
      if(element.category === 'Utställning'){
        newList.push(element);
      }
    });
    return newList;
  }
  function updateList() {
    list = sortList();
  }
  return (
    <div>
      <EventListing list={list}></EventListing>
      <button onClick={updateList()}></button>
    </div>
  );
};

App.PropTypes = {
  list: PropTypes.any
}

export default App;
