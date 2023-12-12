// EntryPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar'; // Update the path accordingly

const EntryPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleUsernameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setUsername(e.target.value);
  };

  const handleContinue = () => {
    // You can perform any necessary validation here before navigating
    if (username.trim() !== '') {
      // Navigate to another page (replace '/dashboard' with your desired page)
      navigate('/dashboard');
    }
  };

  return (
    <div>
      <Navbar /> {/* Include the Navbar component here */}
      <h1>Welcome to Your App</h1>
      <p>Enter your username to continue:</p>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <button onClick={handleContinue}>Continue</button>
    </div>
  );
};

export default EntryPage;
