// import React, { useContext, useState } from 'react';
// import { TodoContext } from './TodoContenxt';

// const TodoList = () => {
//   const { todos, addTodo } = useContext(TodoContext);
//   const [newTodo, setNewTodo] = useState('');

//   const handleAddTodo = () => {
//     if (newTodo.trim()) {
//       addTodo(newTodo);
//       setNewTodo('');
//     }
//   };

//   return (
//     <div>
//       <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo, index) => <li key={index}>{todo}</li>)}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;

// src/components/TodoList/TodoList.js
// src/components/TodoList/TodoList.js
import React, { useContext, useState } from 'react';
import { TodoContext } from './TodoContenxt';
import Navbar from '../Navbar/navbar';


const TodoList = () => {
  const { todos, addTodo, removeTodo } =useContext(TodoContext) ; 
  const [newTodo, setNewTodo] = useState('');

  // Handle adding a new to-do
  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo(''); // Clear input field after adding
    }
  };

  return (
    <div>
      <Navbar/>
      <h2>To-Do List</h2>

      {/* Input for new to-do */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new to-do"
      />
      <button onClick={handleAddTodo}>Add To-Do</button>

      {/* Display the list of todos */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;