import React, { useState } from 'react';
import Form from './Form';
import Dashboard from './Dashboard';
import './styles.css';

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="container">
      <h1>{!formData ? 'User Form' : 'User Dashboard'}</h1>
      {!formData ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <Dashboard data={formData} />
      )}
    </div>
  );
};

export default App;
