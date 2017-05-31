import React, { Component } from "react"

import Activity from "./Activity"
import Geolocator from "./Geolocator"

class ActivityList extends Component {
  constructor() {
    super()
    this.state = {
      activities: [],
      location: {
        latitude: null,
        longitude: null
      }
    }
    this.handleGeolocatorError = this.handleGeolocatorError.bind(this)
    this.updateLatLong = this.updateLatLong.bind(this)
  }
  handleGeolocatorError(error) {
    console.log(error) // TODO: fallback to search when error occurs with geolocation
  }
  updateLatLong({ coords }) {
    this.setState({
      location: { latitude: coords.latitude, longitude: coords.longitude }
    })
    fetch(
      `/activities/bylocation?latitude=${this.state.location.latitude}&longitude=${this.state.location.longitude}`,
      { accept: "application/json" }
    )
      .then(response => response.json())
      .then(activities => this.setState({ activities: activities }))
  }
  render() {
    const activities = this.state.activities || []
    const activityList = activities.map((activity, index) => (
      <Activity
        key={`activity-${index}`}
        activity={activity.content}
        distance={activity.distance}
      />
    ))
    return (
      <div>
        <Geolocator
          callback={this.updateLatLong}
          handleError={this.handleGeolocatorError}
        />
        <div className="ui one cards">
          {activityList}
        </div>
      </div>
    )
  }
}

export default ActivityList
