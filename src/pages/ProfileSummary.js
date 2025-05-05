import React from 'react';

const ProfileSummary = ({ userData }) => {
  return (
    <div className="profile-summary">
      <h2>Welcome, {userData.name}</h2>
      <p>Role: {userData.role}</p>
    </div>
  );
};

export default ProfileSummary;
