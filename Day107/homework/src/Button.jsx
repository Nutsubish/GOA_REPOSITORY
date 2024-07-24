

const CounterButton = () => {
    let amountofclick = 0;
  
    const handleClick = () => {
      amountofclick++;
      document.getElementById('count').innerText = amountofclick;
    };
  
    return (
      <>
        <p id="count">{amountofclick}</p>
        <button onClick={handleClick}>Click on me!</button>
      </>
    );
  };
  
  export default CounterButton;
  