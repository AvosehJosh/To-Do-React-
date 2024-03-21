import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  const addTodo = () => {
    if (todoValue.trim() !== '') {
      setTodos([...todos, { text: todoValue, completed: false }]);
      setTodoValue('');
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };


  return (
    <div>
        <span style={{'font-size':"40px", 'margin-left':"20px"}}>TO-DO APP</span>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            <span >
              {todo.text}
              <button onClick={() => handleDeleteTodo(index)} style={{'margin':"5px", 'background':"rgb(223, 34, 76)",'border-radius':"5px", 'boxShadow':"none"}}>Delete</button>
            </span>
          </li>
        ))}
      </ol>
      <input 
        type="text"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTodo} className='button'>Add</button>
    </div>
  );
}

export default TodoList;



