import React, { useState, useEffect } from 'react';
import './Dashboard.css';

// Import components for different dashboard sections
import ProfileSummary from './ProfileSummary';
import Metrics from './Metrics';
import ActivityFeed from './ActivityFeed';
import Graphs from './Graphs';
import Notifications from './Notifications';
import QuickActions from './QuickActions';
import Events from './Events';

const Dashboard = () => {
  const [userData, setUserData] = useState({});  // Placeholder for user data
  const [metricsData, setMetricsData] = useState({});
  const [notifications, setNotifications] = useState([]);
  const [activityFeed, setActivityFeed] = useState([]);
  const [events, setEvents] = useState([]);

  // Simulating fetch requests to gather data
  useEffect(() => {
    // Fetch user data, metrics, activity feed, notifications, events
    fetchUserData();
    fetchMetricsData();
    fetchNotifications();
    fetchActivityFeed();
    fetchEvents();
  }, []);

  const fetchUserData = async () => {
    // Example: Fetch user profile information
    const data = { name: 'Aman Patel', role: 'Startup Founder' };
    setUserData(data);
  };

  const fetchMetricsData = async () => {
    // Example: Fetch dashboard metrics
    const data = {
      totalSubmissions: 5,
      fundingRequested: 500000,
      fundingApproved: 250000,
      collaborators: 3
    };
    setMetricsData(data);
  };

  const fetchNotifications = async () => {
    // Example: Fetch user notifications
    const data = [
      { message: 'Your project has been approved.', date: '2023-09-15' },
      { message: 'You received a collaboration request.', date: '2023-09-14' }
    ];
    setNotifications(data);
  };

  const fetchActivityFeed = async () => {
    // Example: Fetch recent activities
    const data = [
      { title: 'New project submission', date: '2023-09-13' },
      { title: 'Funding request sent', date: '2023-09-12' }
    ];
    setActivityFeed(data);
  };

  const fetchEvents = async () => {
    // Example: Fetch upcoming events
    const data = [
      { eventName: 'Innovation Conference', eventDate: '2023-09-20' },
      { eventName: 'Research Workshop', eventDate: '2023-09-22' }
    ];
    setEvents(data);
  };

  return (
    <div className="dashboard">
      {/* Profile summary and quick metrics */}
      <ProfileSummary userData={userData} />
      <Metrics metricsData={metricsData} />

      {/* Main content area */}
      <div className="dashboard-content">
        <div className="left-column">
          {/* Quick actions */}
          <QuickActions />
          
          {/* Activity feed */}
          <ActivityFeed activityFeed={activityFeed} />
        </div>
        
        <div className="right-column">
          {/* Graphs and visual insights */}
          <Graphs metricsData={metricsData} />
          
          {/* Notifications */}
          <Notifications notifications={notifications} />
          
          {/* Upcoming events */}
          <Events events={events} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
