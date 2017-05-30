import React from "react";
import PropTypes from "prop-types";

import Activity from "./Activity";

const ActivityList = ({ activities }) => {
  const activityList = activities.map((activity, index) => (
    <Activity key={`activity-${index}`} activity={activity.content} distance={activity.distance} />
  ));
  return (
    <div className="ui one cards">
      {activityList}
    </div>
  );
};

ActivityList.propTypes = {
  activities: PropTypes.array.isRequired
}

export default ActivityList;
