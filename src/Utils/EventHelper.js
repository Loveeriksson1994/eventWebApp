import portletContextUtil from '@sitevision/api/server/PortletContextUtil';
import nodeTreeUtil from '@sitevision/api/server/NodeTreeUtil';
import propertyUtil from '@sitevision/api/server/PropertyUtil';
import dateUtil from '@sitevision/api/server/DateUtil';
import properties from '@sitevision/api/server/Properties';

function getPicture(node) {
   let pictureId = propertyUtil.getString(node, 'picture');
   return pictureId;
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

function eventIsActive(node) {
   let endDate = propertyUtil.getCalendar(node, "endDate"),
      today = new Date(),
      currentDateISO = dateUtil.getDateAsISO8601String(today),
      currentDateFormated = currentDateISO.split("T")[0],
      endDateFormated = dateUtil.getCalendarAsString("yyyy-MM-dd", endDate);

   if (endDateFormated >= currentDateFormated) {
      return true;
   } else {
      return false;
   }
}

function createObject(node, list) {
   let currentList = list;
   if (eventIsActive(node)) {
      let startDate = propertyUtil.getCalendar(node, 'startDate'),
      endDate = propertyUtil.getCalendar(node, 'endDate');
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
      currentList.push(object);
   }
   return currentList;
}

function sortByDate(a, b) {
   return new Date(a.startDateForSort).valueOf() - new Date(b.startDateForSort).valueOf();
}

const createEventList = () => {
   const currentPage = portletContextUtil.getCurrentPage(),
      eventArchive = nodeTreeUtil.getNode(currentPage, '../Evenemang'),
      events = eventArchive.getNodes();

   let list = [];

   if (events) {
      while (events.hasNext()) {
         list = createObject(events.next(), list);
      }
   }
   return list.sort(sortByDate);
}

export { createEventList };