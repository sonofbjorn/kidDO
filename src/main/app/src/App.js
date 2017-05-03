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
    console.log(error);
  }
  updateLatLong({ coords }) {
    this.setState({ location: { latitude: coords.latitude, longitude: coords.longitude } });
  }
  render() {
    const activities = this.state.activities || [];
    return (
      <div className="ui main text container">
        <Geolocator
          callback={this.updateLatLong}
          errorHandler={this.handleGeolocatorError}
        />
        <h2 className="ui header">kidDO</h2>
        <ActivityList activities={activities} />
      </div>
    );
  }
  componentDidMount() {
    fetch("/activities", { accept: "application/json" })
      .then(response => response.json())
      .then(({ _embedded: data }) =>
        this.setState({ activities: data.activities })
      );
  }
}

export default App;
