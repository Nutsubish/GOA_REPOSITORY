import React, { useState } from 'react';

const ReadMore = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(prev => !prev);
  };
  const show = isExpanded ? 'block' : 'none'

  return (
    <div>
      <button onClick={handleToggle}>
        {isExpanded ? 'Show Less' : 'Read More'}
      </button>
      <p style={{ display: show}}>
        Hello
      </p>
    </div>
  );
};

export default ReadMore;
