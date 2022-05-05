import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Category.css';

const Category = ({category}) => {
    let cat = category;
    if(category.contains(' ')){
        cat = category.replace(' ', '');
    }
    
    return (
    <div className={styles.cate}>
      <div class="sup-CategoryContainer sup-CategoryContainer--notClicked" id={cat} onclick="EnFunktion()">
         {category}
      </div>
    </div>
  );
};

App.PropTypes = {
  category: PropTypes.string
}

export default Category;