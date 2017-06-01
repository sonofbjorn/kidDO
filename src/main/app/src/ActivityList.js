import React, { Component } from "react"

import Activity from "./Activity"
import Geolocator from "./Geolocator"

class ActivityList extends Component {
  constructor() {
    super()
    this.state = {
      activities: []
    }
    this.handleGeolocatorError = this.handleGeolocatorError.bind(this)
    this.updateLatLong = this.updateLatLong.bind(this)
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      this.updateLatLong,
      this.handleGeolocatorError
    )
  }
  handleGeolocatorError(error) {
    console.log(error) // TODO: fallback to search when error occurs with geolocation
  }
  updateLatLong({ coords }) {
    const { latitude, longitude } = coords
    fetch(
      `/activities/bylocation?latitude=${latitude}&longitude=${longitude}`,
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
        <div className="ui one cards">
          {activityList}
        </div>
      </div>
    )
  }
}

export default ActivityList
