import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [rank, setRank] = useState('');
  const [idNumber, setIdNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      photo,
      rank,
      idNumber,
    };
    onSubmit(formData);
  };

  const handlePhotoUpload = (e) => {
    setPhoto(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Photo:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          required
        />
      </div>
      <div>
        <label>Rank:</label>
        <select
          value={rank}
          onChange={(e) => setRank(e.target.value)}
          required
        >
          <option value="">Select Rank</option>
          <option value="First Rank">First Rank</option>
          <option value="Second Rank">Second Rank</option>
          <option value="Third Rank">Third Rank</option>
        </select>
      </div>
      <div>
        <label>ID Number:</label>
        <input
          type="text"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
          pattern="#\d{6}"
          placeholder="#123456"
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
