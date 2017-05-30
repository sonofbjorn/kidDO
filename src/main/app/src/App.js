import React, { Component } from "react";

import ActivityList from "./ActivityList";
import Geolocator from "./Geolocator";

class App extends Component {
  constructor() {
    super();
    this.state = {
      activities: [],
      location: {
        latitude: null,
        longitude: null
      }
    };
    this.handleGeolocatorError = this.handleGeolocatorError.bind(this);
    this.updateLatLong = this.updateLatLong.bind(this);
  }
  handleGeolocatorError(error) {
    console.log(error); // TODO: fallback to search when error occurs with geolocation
  }
  updateLatLong({ coords }) {
    this.setState({
      location: { latitude: coords.latitude, longitude: coords.longitude }
    });
    fetch(
      `/activities/bylocation?latitude=${this.state.location.latitude}&longitude=${this.state.location.longitude}`,
      { accept: "application/json" }
    )
      .then(response => response.json())
      .then(activities => this.setState({ activities: activities }));
  }
  render() {
    const activities = this.state.activities || [];
    return (
      <div className="ui main text container">
        <Geolocator
          callback={this.updateLatLong}
          handleError={this.handleGeolocatorError}
        />
        <h1 className="ui center aligned header">
          <i className="compass icon" />
          kidDO
        </h1>
        <ActivityList activities={activities} />
      </div>
    );
  }
}

export default App;
