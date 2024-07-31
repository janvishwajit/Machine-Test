import React from 'react';
import './Dashboard.css';

const Dashboard = ({ data }) => {
  return (
    <div className="dashboard">
      <div className="profile">
        {data.photo && <img src={data.photo} alt="Candidate Photo" className="profile-photo" />}
        <div className="details">
          <p className='dashboard-id'><strong>ID:</strong> {data.idNumber}</p>
          <p><strong>Name:</strong> {data.name}</p>
        </div>
      </div>
      <p>Congratulations!! You have secured <span className='dashboard-rank'>{data.rank}</span></p>

    </div>
  );
};

export default Dashboard;
