import React, { useState } from 'react';

const App1 = () => {
  // Initial state for counter value and input value
  const [count, setCount] = useState(1);
  const [inputValue, setInputValue] = useState(0);

  // Handler for increment
  const increment = () => {
    setCount((prevCounts) => prevCounts + 1);
  };

  // Handler for decrement
  const decrement = () => {
    setCount((prevCounts) => prevCounts - 1);
  };

  // Handler for setting the value from input
  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10) || 0;
    setInputValue(newValue);
    setCount(newValue); // Update the counter to match input
  };

  

  return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Set counter value"
        />
      </div>
    </div>
  );
};

export default App1;
