import portletContextUtil from '@sitevision/api/server/PortletContextUtil';
import nodeTreeUtil from '@sitevision/api/server/NodeTreeUtil';
import nodeIteratorUtil from '@sitevision/api/server/NodeIteratorUtil';
import propertyUtil from '@sitevision/api/server/PropertyUtil';
import dateUtil from '@sitevision/api/server/DateUtil';
import properties from '@sitevision/api/server/Properties';
import resourceLocatorUtil from '@sitevision/api/server/ResourceLocatorUtil';
import logUtil from '@sitevision/api/server/LogUtil';

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

// function createObject(node, list) {
//    let startDate = propertyUtil.getCalendar(node, 'startDate'),
//       endDate = propertyUtil.getCalendar(node, 'endDate');
//    if (eventIsActive(node)) {
//       let object = {
//          startDateForSort: dateUtil.getCalendarAsString("yyyy-MM-dd", startDate),
//          endDateForSort: dateUtil.getCalendarAsString("yyyy-MM-dd", endDate),
//          startDate: formatStartDate(node),
//          endDate: formatEndDate(node),
//          title: propertyUtil.getString(node, 'SV.Title'),
//          category: getCategory(node),
//          picture: getPicture(node),
//          url: properties.get(node, 'URL')
//       };
//       list.push(object);
//    }
//    logUtil.info(node);
// }

/**
 * Sätter den nuvarande listan till currentList och sedan lägger ni till värden i den istället
 * När ni sedan lagt till alla värden så retunerar ni currentList som är den aktuella listan 
 * med det nya tillagda värdet.
 */
function createObject(node, list) {
   let startDate = propertyUtil.getCalendar(node, 'startDate'),
      endDate = propertyUtil.getCalendar(node, 'endDate'),
      currentList = list;
   if (eventIsActive(node)) {
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
      events = eventArchive.getNodes(),
      first = nodeIteratorUtil.findFirst(events, null);
   let list = [];
   logUtil.info(events);

   /**
    * Vad gör ni här?
    * 
    * Här kör ni enbart create object som skapar nya object men dessa
    * objects retuneras inte i funktionen. Så det den gör blir ju att iterera genom
    * en lista och skapa upp object i en lista som ni inte gör något med... :) 
    * 
    * 
    * let enVariabel = createObject(first, list);
    * 
    * Behöver ni verkligen köra createObject() på två ställen såhär eller räcker det med
    * att ni bara kör en for loop med alla event och retunerar dem som listan.
    * 
    */

   createObject(first, list);


   /**
    * FÖRSLAG
    * 
    * Här skriver ni över den gamla listan med den uppdaterade listan för varje iteration.
    * 
    * Värdet "list" kanske ni vill definiera i början av eran funktion createEventList() så att ni får en ny 
    * variabel med listan. 
    * 
    *    events.forEachRemaining((event) => {
         list = createObject(event, list);
         });
    */
   events.forEachRemaining((event) => {
      list = createObject(event, list)
   });

   return list.sort(sortByDate);
   //return sortedList;
   /**
    * return "vilket object ni sedan ska retunera till eran applikation"
    */
}

export { createEventList };