import { useState } from 'react';
import Presentational from "./Presentational2";

const Container = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleSum = () => {
    e.preventDefault()
    setSum(num1 + num2);
  };

  const handleChange1 = (e) => {
    setNum1(Number(e.target.value));
  };

  const handleChange2 = (e) => {
    setNum2(Number(e.target.value));
  };

  return (
    <Presentational num1={num1} num2={num2} sum={sum} handleSum={handleSum} handleChange1={handleChange1} handleChange2={handleChange2}  />
  );
};

export default Container;
