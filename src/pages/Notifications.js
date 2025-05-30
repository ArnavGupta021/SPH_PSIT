import React from 'react';

const Notifications = ({ notifications }) => {
  return (
    <div className="notifications">
      <h3>Notifications</h3>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>
            {notification.message} <span>{notification.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
