import React, { useState } from 'react';
import Form from './Form';

const List = () => {
  const [items, setItems] = useState(['Task 1', 'Task 2']);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div style={{ padding: '0 20px' }}>
      <h2>Task List</h2>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {items.map((item, index) => (
          <li key={index} style={{ margin: '5px 0', padding: '5px', background: '#f0f0f0' }}>{item}</li>
        ))}
      </ul>
      <Form addItem={addItem} />
    </div>
  );
};

export default List;
