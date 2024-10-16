// import React, { createContext, useState } from 'react';

// export const TodoContext = createContext();

// export const TodoProvider = ({ children }) => {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (todo) => setTodos([...todos, todo]);

//   return (
//     <TodoContext.Provider value={{ todos, addTodo }}>
//       {children}
//     </TodoContext.Provider>
//   );
// };

// src/components/TodoList/TodoContext.js
import React, { createContext, useState } from 'react';

// Create a Context for the Todo List
export const TodoContext = createContext();

// Create a Provider Component
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Add a new todo
  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), text: todo }]);
  };

  // Remove a todo by its ID
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
