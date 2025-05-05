import React from 'react';

const ActivityFeed = ({ activityFeed }) => {
  return (
    <div className="activity-feed">
      <h3>Recent Activity</h3>
      <ul>
        {activityFeed.map((activity, index) => (
          <li key={index}>
            <strong>{activity.title}</strong> <span>{activity.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
