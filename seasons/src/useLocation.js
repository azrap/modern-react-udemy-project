import { useEffect, useState } from "react";

export default () => {
  const [lat, setLat] = useState(null);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      //to update the state object we call setState once we get the position

      (position) => setLat(position.coords.latitude),
      //when you call setState, you are only adding or changing, never removing or deleting. It leaves the rest of the things alone and only updates/adds what you tell it
      (err) => setErrorMessage(err.message)
    );
  }, []);
  return [lat, errorMessage];
};
