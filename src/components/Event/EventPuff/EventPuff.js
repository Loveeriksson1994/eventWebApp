import React from "react";
import sorttedDate from "../../App/Logik/Logik.js";
import TitleBox from "../TitleBox/TitleBox.js";
import DateBox from "../DateBox/DateBox";
import CategoryBox from "../CategoryBox/CategoryBox";
import PictureBox from "../PictureBox/PictureBox.js";

const list = sorttedDate;
//  <DateBox start={item.start} end={item.end}></DateBox>

const EventPuff = () => {
  return (
    <div className="sup-eventContainer">
      {list.map((item) => (
        <div className="sup-eventPuff">
          <a href={item.url}>
            <PictureBox Picture={item.picture}></PictureBox>
            <DateBox start={item.start} end={item.end}></DateBox>
            <TitleBox title={item.title}></TitleBox>
            <CategoryBox categories={item.category}></CategoryBox>
          </a>
        </div>
      ))}
    </div>
  );
};

export default EventPuff;
