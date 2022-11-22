import React, { useState } from 'react'
import Title from './components/title.jsx'
import Form from './components/form.jsx'
import TodoList from './components/list'
import './App.css'

const App = () => {

  const initialList = [];
  const [todos, setTodos] = useState(initialList); // state containing the array as a first state

  return (
    <div className="tool text-left bg-black/90 p-8">
      <Title />
      <div className="flex justify-around">
        <Form todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
export default App;