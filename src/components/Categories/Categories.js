import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Categories.css'

const Categories = ({categoryList}) => {
  /*
  let selectedCategory= '';
  function selectedCategoryList(category, list){
    if(selectedCategory.contains(category)){
      selectedCategory -= category;
      return;
    }
    else{
      let selectedCategoryList = [];
      list.foreach(element) => {
        if(element.category === category) {
          selectedCategoryList.push(element);
        }
      }
      return selectedCategoryList;
    }
  }
  */
  return (
    <div className={styles.supCategoriesContainer}>
      {categoryList.map(category =>(
          category
      ))}
    </div>
  );
};

App.PropTypes = {
  categoryList: PropTypes.any
}

export default Categories;
