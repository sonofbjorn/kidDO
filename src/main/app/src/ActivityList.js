import React from "react";

import Activity from "./Activity";

const ActivityList = ({ activities }) => {
  const activityList = activities.map((activity, index) => (
    <Activity key={`activity-${index}`} activity={activity} />
  ));
  return (
    <div className="ui one cards">
      {activityList}
    </div>
  );
};

export default ActivityList;
