import React, { useState } from 'react';

const SimpleColorPicker = () => {

  const [color, setColor] = useState('white');


  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <h2>Simple Color Picker</h2>
      <input
        type="text"
        onChange={handleChange}
      />
      <div
        style={{
          backgroundColor: color,
        }}
      />
      hello
    </div>
  );
};

export default SimpleColorPicker;
