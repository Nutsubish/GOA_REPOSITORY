import React, { useEffect, useState } from 'react';

const Changing = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const Texts = (e) => {
    const valueof = e.target.value;
    setText(valueof);
    console.log(e); 
  };

  useEffect(() => {
    console.log("piece of state Changed");
  }, [count, text]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      
      <h1>Name: {text}</h1>
      <input 
        type="text" 
        value={text}
        name="textis"
        onChange={Texts} 
      /> 
    </div>
  );
};

export default Changing;
