import React, { useState } from 'react';

const Form = ({ addItem }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addItem(inputValue);
      setInputValue('');
    } else {
      alert('Please enter a task!');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px', display: 'flex', gap: '10px' }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a task..."
        style={{ padding: '5px', flex: 1 }}
      />
      <button type="submit" style={{ padding: '5px 10px' }}>Add Task</button>
    </form>
  );
};

export default Form;
