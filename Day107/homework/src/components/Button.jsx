import { useState } from "react";

const Buttons = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);



  return (
    <>
      <div className="main-div">
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Add +1</button>
        <button onClick={() => setCount(count + 10)}>Add +10</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>Minus -1</button>
        <button onClick={() => setCount(count - 10)}>Minus -10</button>
        <input type="number"  onInput={(e) => setInputValue(parseInt(e.target.value))} />
        <button onClick={() => setCount(count + inputValue)}>Confirm +</button>
        <button onClick={() => setCount(count - inputValue)}>Confirm -</button>
      </div>
    </>
  );
}

export default Buttons;
