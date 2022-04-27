import portletContextUtil from '@sitevision/api/server/PortletContextUtil';
import nodeTreeUtil from '@sitevision/api/server/NodeTreeUtil';
import nodeIteratorUtil from '@sitevision/api/server/NodeIteratorUtil';
import propertyUtil from '@sitevision/api/server/PropertyUtil';
import dateUtil from '@sitevision/api/server/DateUtil';
import properties from '@sitevision/api/server/Properties';
import resourceLocatorUtil from '@sitevision/api/server/ResourceLocatorUtil';
import imageRenderer from '@sitevision/api/server/ImageRenderer';
import imageScaler from '@sitevision/api/server/ImageScaler';
import pageUtil from '@sitevision/api/server/Pageutil';
import utils from '@sitevision/api/server/Utils';

let currentPage = portletContextUtil.getCurrentPage(),
   eventArchive = nodeTreeUtil.getNode(currentPage, '../Evenemang'),
   eventList = [],
   sorttedDate = [],
   imageScaler1 = utils.getImageScaler(308, 188);
console.log(currentPage);
//const events = nodeIteratorUtil.getMenuItems(eventArchive);
const events = eventArchive.getNodes();

let first = nodeIteratorUtil.findFirst(events, null);

function getPicture(node) {
   let getPic = propertyUtil.getString(node, 'picture');
   return resourceLocatorUtil.getNodeByIdentifier(getPic);
}

function formatStartDate(node) {
   let startMonth = propertyUtil.getCalendar(node, 'startDate');
   return dateUtil.getCalendarAsString("d MMM", startMonth);
}

function formatEndDate(node) {
   let endMonth = propertyUtil.getCalendar(node, 'endDate');
   return dateUtil.getCalendarAsString("d MMM", endMonth);

}

function getCategory(node) {
   let categories = propertyUtil.getStrings(node, "category");
   let list = [];
   categories.forEach(element => {
        list.push(element);
    });

   return list;
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
      title: propertyUtil.getString(node, 'SV.Title'),
      category: getCategory(node),
      picture: getPicture(node),
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

 sorttedDate = eventList.sort(byDate);


imageRenderer.setImageScaler(imageScaler1);
imageRenderer.clearSourceSetMode();
imageRenderer.forceUseImageScaler();


   

export default sorttedDate;
