import React, { useState, useEffect } from 'react'
import Title from './components/title.jsx'
import Form from './components/form.jsx'
import TodoList from './components/list'
import './App.css'

const App = () => {

  const initialList = [];
  const [todos, setTodos] = useState(initialList); // state containing the array as a first state

  const LSKEY = "MyTodoApp"; // sets a unique key for our app 

  useEffect(() => {
    if (todos.length > 1) {
      localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    }
  }, [todos]);
  // = every time react updates the App component, it makes a copy of our todos and save it to localStorage
  // updates are done : when loaded and a todo is added (only in this case)
  // LSKEY + ".todos" = key
  // JSON.stringify(todos) = value

  useEffect(() => {
    const saveTodos = JSON.parse(localStorage.getItem(LSKEY + ".todos"));
    if (saveTodos) {
      setTodos(saveTodos);
    }
  }, []);

  return (
    <div className="tool text-left bg-black/90 p-8">
      <Title />
      <div className="flex flex-wrap justify-around">
        <Form todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
export default App;