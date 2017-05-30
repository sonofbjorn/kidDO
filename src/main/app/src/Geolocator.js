import React from "react";
import PropTypes from "prop-types";

const Geolocator = ({ callback, handleError, options }) => {
  navigator.geolocation.getCurrentPosition(callback, handleError, options);

  return <span></span>;
};

Geolocator.propTypes = {
  callback: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
  options: PropTypes.object
}

export default Geolocator;