import React, { useState, useEffect } from 'react';

const TodoList = () => {
  
  const [todos, setTodos] = useState([]);
  
 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setTodos(data.slice(0, 5));
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []); 

  return (
    <div style={{ padding: '20px' }}>
      <h3>Simple Todo List</h3>

      
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.title} - {todo.completed ? 'Done' : 'Not done'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
