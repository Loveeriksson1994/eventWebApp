import * as React from 'react';
import PropTypes from 'prop-types';
import EventListing from '../EventListing/EventListning.js';
import logUtil from '@sitevision/api/server/LogUtil';
import { categoryList } from '../../utils/categoryHelper.js'
import Category from '../Category/Category.js';
import categoryStyles from '../Category/Category.scss';
import Event from '../Event/Event.js';
import eventStyles from '../EventListing/EventListning.css';

const App = ({ list }) => {
  //list.forEach(element => {
  //logUtil.info('det här reppar ett item');
  // logUtil.info(element.startDateForSort);
  // logUtil.info(element.endDateForSort);
  // logUtil.info(element.startDate);
  // logUtil.info(element.endDate);
  // logUtil.info(element.title);
  // logUtil.info(element.category);
  // logUtil.info(element.picture);
  // logUtil.info(element.url);
  //});
  // function sortList() {
  //   let sortedCatList = [];
  //   list.forEach(element => {
  //     if(element.category === 'Utställning') {
  //       sortedCatList.push(element);
  //     }
  //   });
  //   return sortedCatList;
  // }
  // function updateList() {
  //   list = sortList();
  //   //EventListing.setState(list);
  // }
  // let letList = list;
  // let categoryListan = categoryList();

  // // const [listan, setListan] = React.useState(letList)

  // const [eventList, setEventList] = React.useState(list);
  // const [selectedCategory, setSelectedCategory] = React.useState();

  //  React.useEffect(() => {
  //    setEventList(list);
  //  }, []);

  // function handleCategoryChange(event) {
  //   logUtil.info('hej');
  //   setSelectedCategory(event.target.value);
  // }

  // function getFilteredList() {
  //   if (!selectedCategory) {
  //     return eventList;
  //   }
  //   return eventList.filter((event) => event.category.includes(selectedCategory));
  // }
  // let filteredList = React.useMemo(getFilteredList, [selectedCategory, eventList]);

  return (
    <div>
      {/* <select
        name="category-list"
        id="category-list"
        onChange={handleCategoryChange}
      >
        <option value="">Alla</option>
        {categoryListan.map(category => (
          <option value={category}>{category}</option>
        ))}
      </select> */}
      <Category list={list}></Category>
      {/* <div className={eventStyles.supEventContainer}>
          {list.map((event) => (
            <Event event={event} />
          ))} 
      </div>*/}
    </div>
  );
};

App.PropTypes = {
  list: PropTypes.any
}

export default App;
