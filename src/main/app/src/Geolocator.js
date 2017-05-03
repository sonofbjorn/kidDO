import React from "react";

const Geolocator = ({ callback, handleError, options }) => {
  navigator.geolocation.getCurrentPosition(callback, handleError, options);

  return <span></span>;
};

export default Geolocator;