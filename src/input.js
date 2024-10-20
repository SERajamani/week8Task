import React, { useState, useEffect } from 'react';

const SimpleNameForm = () => {
  // State to store the input name
  const [userName, setUserName] = useState('');
  
  // State to store fetched API data
  const [userData, setUserData] = useState(null);

  // Handle input change to capture user's name
  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  // Fetch data from an API when the component is first rendered
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/2') // Example API URL
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error('API fetch error:', error));
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div style={{ padding: '20px' }}>
      <h3>Enter Your Name:</h3>
      
      {/* Input field to capture name */}
      <input 
        type="text" 
        value={userName} 
        onChange={handleInputChange} 
        placeholder="Your name" 
        style={{ padding: '8px', marginBottom: '10px' }} 
      />
      
      {/* Display entered name */}

      <p>{userName ? `Hello, ${userName}!` : 'Please type your name.'}</p>

      {/* Display fetched API data */}
      
      {userData && (
        <div style={{ marginTop: '20px' }}>
          <h4>Fetched API User:</h4>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
        </div>
      )}
    </div>
  );
};

export default SimpleNameForm;
