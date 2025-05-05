import React from 'react';

const Events = ({ events }) => {
  return (
    <div className="events">
      <h3>Upcoming Events</h3>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.eventName} <span>{event.eventDate}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
