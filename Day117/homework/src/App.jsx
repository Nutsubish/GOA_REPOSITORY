import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState(''); 
  const [text, setText] = useState('Guest'); 

  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
  };

  const handleButtonClick = () => {
    setText(inputValue);
  };

  return (
    <>
      <p id='Main-p'>Hello {text}</p>
      <div id='flex-div'>
        <input type="text" onChange={handleInputChange} className='Main-input'/> 
      </div>
      <div id='flex-div'>
        <button onClick={handleButtonClick} className='Btn'>Click Me</button>
      </div>
    </>
  );
}

export default App;
