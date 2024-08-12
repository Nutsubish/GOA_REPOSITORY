import React, { useState } from 'react';

function ItemList() {
  
  const [inputValue, setInputValue] = useState('');
  

  const [items, setItems] = useState([]);


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {

    if (inputValue != '') {
      setItems([inputValue]);
      setInputValue('');
    }
  };


  return (
    <div>
      <h1>Item List</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter an item" 
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li> 
        ))}
      </ul>
    </div>
  );
}

export default ItemList;