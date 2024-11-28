import React, { useState } from 'react';

function ToggleText() {

  const [isVisible, setIsVisible] = useState(false);

  

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };


  return (
    <div>
      <button onClick={toggleVisibility}>
         Click Me!
      </button>
      {isVisible && <p>This is the paragraph of text that can be shown or hidden.</p>}
    </div>
  );
}

export default ToggleText;
