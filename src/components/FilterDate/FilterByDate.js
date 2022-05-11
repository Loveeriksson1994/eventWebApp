import React from "react";
import filteredDayArray from "../../Utils/DateFilterHelper"

const FilterByDate = () =>{


    return(
<div> <label>Välj ett datum för att filtrera evenemangen på datum</label>
<div style="display: flex;">
   <div>
   <p>
   Från:
	</p>
<input type="date" onchange="filterDateArray()" id="Eventstart" name="event-start" placeholder="StartDatum"/>
	</div>
	<div>
  		<p>
  		 Till:
		</p>  
<input type="date" onchange="filterDateArray()" id="Eventend" name="event-end" placeholder="SlutDatum"/>
	</div>
</div>

<button id="filterButton" onclick="updateTest()">
   Filtrera
</button>


<p id="startDate">
   
</p>

<p id="endDate">
   
</p></div>

    )


}

export default FilterByDate;