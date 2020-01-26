import React from "react";

// put logic outside of the functional compoent. Can do it inside, but this is neater

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
  const seasonText =
    season === "winter" ? " Burr it's chilly" : " Let's hit the beach!";

  console.log(season);
  return (
    <div>
      Season Feelings:
      <h1>{seasonText}</h1>
    </div>
  );
};

export default SeasonDisplay;
