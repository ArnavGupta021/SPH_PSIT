import React from 'react';

const Metrics = ({ metricsData }) => {
  return (
    <div className="metrics">
      <h3>Quick Overview</h3>
      <div className="metrics-grid">
        <div className="metric">
          <h4>Total Submissions</h4>
          <p>{metricsData.totalSubmissions}</p>
        </div>
        <div className="metric">
          <h4>Funding Requested</h4>
          <p>${metricsData.fundingRequested}</p>
        </div>
        <div className="metric">
          <h4>Funding Approved</h4>
          <p>${metricsData.fundingApproved}</p>
        </div>
        <div className="metric">
          <h4>Collaborators</h4>
          <p>{metricsData.collaborators}</p>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
