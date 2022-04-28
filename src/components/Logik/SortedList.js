import portletContextUtil from '@sitevision/api/server/PortletContextUtil';
import nodeTreeUtil from '@sitevision/api/server/NodeTreeUtil';
import nodeIteratorUtil from '@sitevision/api/server/NodeIteratorUtil';
import propertyUtil from '@sitevision/api/server/PropertyUtil';
import dateUtil from '@sitevision/api/server/DateUtil';
import properties from '@sitevision/api/server/Properties';
import resourceLocatorUtil from '@sitevision/api/server/ResourceLocatorUtil';

let currentPage = portletContextUtil.getCurrentPage(),
   eventArchive = nodeTreeUtil.getNode(currentPage, '../Evenemang'),
   eventList = [];
 
const events = eventArchive.getNodes();
 
let first = nodeIteratorUtil.findFirst(events, null);
 
function getPicture(node) {
   let getPic = propertyUtil.getString(node, 'picture');
   return resourceLocatorUtil.getNodeByIdentifier(getPic);
}
 
function formatStartDate(node) {
   let startDate = propertyUtil.getCalendar(node, 'startDate');
   return dateUtil.getCalendarAsString("d MMM", startDate);
}
 
function formatEndDate(node) {
   let endDate = propertyUtil.getCalendar(node, 'endDate');
   return dateUtil.getCalendarAsString("d MMM", endDate);
 
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
      startDate: formatStartDate(node),
      endDate: formatEndDate(node),
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
 
const sortedList = eventList.sort(byDate);

export default sortedList;