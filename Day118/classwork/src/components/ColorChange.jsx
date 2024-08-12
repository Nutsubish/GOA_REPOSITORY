import { useState } from "react";

const ColorChange = () => {
  const [color, setColor] = useState("black");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="App">
      <p style={{ color }}>Color: {color}</p>

      <input
        type="text"
        onChange={handleChange}
      />
    </div>
  );
}
export default ColorChange