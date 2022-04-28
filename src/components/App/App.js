import * as React from 'react';
// import PropTypes from 'prop-types';
// import styles from './App.scss';


import utils from '@sitevision/api/server/Utils';
import portletContextUtil from '@sitevision/api/server/PortletContextUtil'; 
import nodeTreeUtil from '@sitevision/api/server/NodeTreeUtil';
import propertyUtil from '@sitevision/api/server/PropertyUtil';
import nodeIteratorUtil from '@sitevision/api/server/NodeIteratorUtil';
import dateUtil from '@sitevision/api/server/DateUtil';
import properties from '@sitevision/api/server/Properties';
import resourceLocatorUtil from '@sitevision/api/server/ResourceLocatorUtil';
import imageRenderer from '@sitevision/api/server/ImageRenderer';


let currentPage = portletContextUtil.getCurrentPage(),
   eventArchive = nodeTreeUtil.getNode(currentPage, '../Evenemang'),
   eventList = [],
   imageScaler1 = utils.getImageScaler(308, 188);

//const events = nodeIteratorUtil.getMenuItems(eventArchive),
const events = eventArchive.getNodes();

let first = nodeIteratorUtil.findFirst(events, null);

function getPicture(node) {
   let getPic = propertyUtil.getString(node, 'picture');
   return resourceLocatorUtil.getNodeByIdentifier(getPic);
}

// function getPictureUrl(pictureNode) {
//    let picUrl = propertyUtil.getString(pictureNode, 'URI');
//    return picUrl;
// }

function formatStartDate(node) {
   let startMonth = propertyUtil.getCalendar(node, 'startDate');
   return dateUtil.getCalendarAsString("d MMM", startMonth);
}

function formatEndDate(node) {
   let endMonth = propertyUtil.getCalendar(node, 'endDate');
   return dateUtil.getCalendarAsString("d MMM", endMonth);

}

function getCategory(node) {
   let categories = propertyUtil.getStrings(node, "category"),
   categoryArray = [];
   categories.forEach(category => {
      categoryArray.push(category);
   });
   return categoryArray;
}

function createObject(node) {
   let startDate = propertyUtil.getCalendar(node, 'startDate'),
      endDate = propertyUtil.getCalendar(node, 'endDate'),
      today = new Date(),
      currentDateISO = dateUtil.getDateAsISO8601String(today),
       currentDateFormated = currentDateISO.split('T')[0];

   let object = {
      startDateForSort: dateUtil.getCalendarAsString("yyyy-MM-dd", startDate),
      endDateForSort: dateUtil.getCalendarAsString("yyyy-MM-dd", endDate),
      start: formatStartDate(node),
      end: formatEndDate(node),
      rubrik: propertyUtil.getString(node, 'SV.Title'),
      category: getCategory(node),
      picture: getPicture(node),
      // pictureUrl: getPictureUrl(getPicture(node)),
      url: properties.get(node, 'URL')
   };
// Om evenamangets slutdatum har passerat
 /*  if (object.endDateForSort >= currentDateFormated)
      eventList.push(object);
      */
      // ta bort detta för att ta bort checken för passerat datum
   eventList.push(object);

}

createObject(first);
events.forEachRemaining((event) => createObject(event));

function byDate(a, b) {
   return new Date(a.startDateForSort).valueOf() - new Date(b.startDateForSort).valueOf();
}

const sorttedDate = eventList.sort(byDate);
let today = new Date().toLocaleDateString('sv-SV');
//const sorttedDates = eventList.forEach(element => element.startsortDate));;

imageRenderer.setImageScaler(imageScaler1);
imageRenderer.clearSourceSetMode();
imageRenderer.forceUseImageScaler();



const App = () => {
  return (
    <div className="sup-eventContainer">
      {sorttedDate.map(event => (
         <div className="sup-eventPuff">
            <a href={event.url}>
               {imageRenderer.setImage(event.picture)}
               <div dangerouslySetInnerHTML={{ __html: imageRenderer.render() }}>
               </div>

               <div className="sup-eventPuff__dateBox">
               {(() => {
                  if (event.start == event.end) {
                     return (
                        <time> {event.start} </time>
                     )
                  }
                  
                  else {
                     return (
                        <time> {event.start} - {event.end} </time>
                     )
                  }
               })()}
               </div>

               <div className="sup-eventPuff__titleBox">
                  {event.rubrik}
               </div>

               <div className="sup-eventPuff__categoryBox">
                  {event.category.map(cat => (
                     <span>
                     {(() => {
                        // if (event.category.length == 1) {
                        //    return (
                        //       <span>{cat}</span>
                        //    )
                        // }

                        if (event.category.indexOf(cat) == event.category.length - 1) {
                           return <span>{cat}</span>
                        }

                        else {
                           return (
                              <span>{cat} • </span>
                           )
                        }
                     })()}
                     </span>
                  ))}
                  </div>
            </a>
         </div>
      ))}
    </div>
  );
};


// App.propTypes = {
//   message: PropTypes.string,
//   name: PropTypes.string,
// };

export default App;
