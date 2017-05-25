import React from "react";

const Activity = ({ activity, distance }) => {
  const cost = activity.cost === 0 ? "Free" : `$${activity.cost}`;
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{activity.name}</div>
        <div className="meta">
          <span>{cost}</span>
          <span>{activity.ageRange}</span>
          <span className="right floated">{distance.value.toFixed(1)} mi</span>
        </div>
        <p>{activity.description}</p>
      </div>
      <div className="extra content">
        <span className="left floated like">
          <i className="like icon" />
          Like
        </span>
      </div>
    </div>
  );
};

export default Activity;
