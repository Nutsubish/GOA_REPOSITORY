import React, { useState, useEffect } from 'react';

function First() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    document.title = count;
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1> 
      <button onClick={() => setCount(count + 1)}>+1</button> 
    </div>
  );
}

export default First;
