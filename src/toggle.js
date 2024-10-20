import React, { useState } from 'react';

const TextToggle = () => {
 
  const [isMessageVisible, setIsMessageVisible] = useState(true);


  const handleToggle = () => {
    setIsMessageVisible(!isMessageVisible);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
     
      {isMessageVisible && (
        <p style={{ color: 'blue', fontSize: '18px' }}>
         Click the button to hide me.
        </p>
      )}

      <button
        onClick={handleToggle}
        style={{
          backgroundColor: isMessageVisible ? 'red' : 'green',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          cursor: 'pointer',
          fontSize: '16px',
          borderRadius: '5px',
        }}
      >
        {isMessageVisible ? 'Hide Message' : 'Show Message'}

      </button>
    </div>
  );
};

export default TextToggle;
