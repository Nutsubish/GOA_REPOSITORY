import React, { useState, useEffect } from 'react';

const Second = () => {
  const [title, setTitle] = useState('');


  
  useEffect(() => {
    document.title = title;
  }, [title]); 

  const handleChange = (e) => {
    setTitle(e.target.value); 
  };



  return (
    <div>
        <input 
          type="text" 
          value={title} 
          onChange={handleChange} 
        />
    </div>
  );
};

export default Second;
