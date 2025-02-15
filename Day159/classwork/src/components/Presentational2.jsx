import React from 'react';

const Presentational = ({ num1,  num2,  sum, handleSum, handleChange1, handleChange2 }) => {
  return (
    <form>
      <input type="number" value={num1} onChange={handleChange1} />
      <input type="number" value={num2} onChange={handleChange2} />
      <button onClick={handleSum} >click</button>
      <h2>Sum: {sum}</h2>
    </form>
  );
};

export default Presentational;
