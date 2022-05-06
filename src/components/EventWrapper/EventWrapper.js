import * as React from 'react';

const EventWrapper = () => {
  
    let categoryList = [];
    const state = React.useState(categoryList, categorySortHandler);

    function categorySortHandler(category) {
        categoryList.forEach(element => {
            if(element === category){
                let index = categoryList.indexOf(category);
                categoryList.splice(index, 1); 
            }
            else{
                categoryList.push(category)
            }
        });
        state = categoryList;
        }
    return (
        <div>
        
        </div>
    );
};

export default Eventlisting;