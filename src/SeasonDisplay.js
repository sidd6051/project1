import React from "react";
import "./SeasonDisplay.css";
const seasonConfigure = {
  summer: {
    text: "let's hit the Beach!!",
    iconName: "sun",
  },
  winter: {
    text: "Burr it's Chilly!!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  const { text, iconName } = seasonConfigure[season];
  // console.log(season, iconName);
  return (
    <div className={`season-display ${season}`}>
      <i className={` top-left massive ${iconName} icon`} />
      <h1> {text} </h1>
      <i className={` bottom-right massive ${iconName} icon`} />
    </div>
  );
};
export default SeasonDisplay;
