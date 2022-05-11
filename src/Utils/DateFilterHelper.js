import sortedList from "../../Utils/SortedList";


const  updateTest = () => {
    var eventStartValue = document.getElementById("Eventstart"),
        eventEndValue = document.getElementById("Eventend");
    document.getElementById("startDate").innerHTML = eventStartValue.value;
    document.getElementById("endDate").innerHTML = eventEndValue.value;}
 
 
 const filterDateArray = (sortedList) => { 

 function filterDays(date){   
    return date >= eventStartValue.value && date <= eventEndValue.value;
 }
    console.log(sortedDate);
    let testList = sorttedDate.filter(filterDays)

 }

 export default {filterDateArray}