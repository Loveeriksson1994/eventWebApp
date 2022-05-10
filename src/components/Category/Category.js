import * as React from 'react';
import { categoryList } from '../../utils/categoryHelper.js';
import styles from './Category.scss';
import styles2 from '../EventListing/EventListning.css';
import Event from '../Event/Event.js';


// function categoryClicked(id) {
//     if (id.classList.includes('supCategoryContainerNotClicked')) {
//         id.classList.remove('supCategoryContainerNotClicked');
//         id.classList.add('supCategoryContainerClicked');
//     }
//     else {
//         id.classList.remove('supCategoryContainerClicked');
//         id.classList.add('supCategoryContainerNotClicked');
//     }
// }

// function formatId(category) {
//     if (category.contains(' ')) {
//         category.replace(' ', '')
//     }
//     return category;
// }

const Category = ({ list }) => {
    let cats = categoryList();
    const [data, setData] = React.useState(list)
    let filteredResult = (categoryItem) => {
        const result = list.filter((curData) => {
            return curData.category.includes(categoryItem);
        });
        setData(result);
        alert('hejsan');
    }
    return (
        <div>
            <div className={styles.supCategoriesContainer}>
                {cats.map((category) => (
                    <div className={styles.supCategoryContainer} onClick={() => filteredResult(category)}>
                        {category}
                    </div>
                ))}
            </div>
            <div className={styles2.supEventContainer}>
                {data.map((event) => (
                    <Event event={event} />
                ))}
            </div>
        </div>
    );
};

export default Category;
