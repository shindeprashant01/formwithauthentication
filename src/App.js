
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Components/Navbar/home'; 
import About from './Components/Navbar/about'; 
import Contact from './Components/Navbar/contact'; 
import Navbar from './Components/Navbar/navbar'; 
import { TodoProvider } from './Components/TodoList/TodoContenxt';
import TodoList from './Components/TodoList/TodoList';
import DataList from './Components/DataList/dataList';
import SignupForm from './Components/Forms/signUpForms';
import FrontPage from './Components/FrontPage/frontPage';
import Button from './Components/Button/button';

const App = () => {
  return (
    <Router>
      {/* <Navbar />  */}
    
      <TodoProvider>
      <Routes>
        <Route path='/' element={<FrontPage/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/todos' element ={<TodoList/>}/>
        <Route path='/data'element={<DataList/>}/>
        <Route path='/signup' element={<SignupForm/>} />
      </Routes>
      </TodoProvider>
    </Router>
  );
};

export default App;


// todo list

// import React from 'react';
// import TodoList from './components/TodoList/TodoList';
// import { TodoProvider } from './components/TodoList/TodoContext';

// const App = () => {
//   return (
//     <TodoProvider>
//       <div>
//         <h1>React To-Do List with Context API</h1>
//         <TodoList />
//       </div>
//     </TodoProvider>
//   );
// };

// export default App;

// src/App.js
// import React from 'react';
// import DataList from './components/DataList/DataList';

// const App = () => {
//   return (
//     <div>
//       <h1>React App with API Data Fetching</h1>
//       <DataList />
//     </div>
//   );
// };

// export default App;


// App.js
// import React from "react";
// import FormComponent from "./components/Forms/FormComponent";
// // import FormComponent from "./FormComponent";


// const App = () => {
//   return (
//     <div className="App">
//   <FormComponent/>
//     </div>
//   );
// };

// export default App;

