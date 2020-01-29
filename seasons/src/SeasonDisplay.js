import React from "react";
import "./seasonDisplay.css";

// put logic outside of the functional compoent. Can do it inside, but this is neater

const seasonConfig = {
  summer: {
    seasonText: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    seasonText: " Burr it's chilly",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    // terniary statement
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "summer" : "winter";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { seasonText, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{seasonText}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
