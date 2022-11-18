import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import Title from './components/title.jsx'
import Input from './components/input.jsx'
import List from './components/list'
import './App.css'

const Todo = () => {
  return (
    <div className="tool text-left">
      <Title/>
      <Input/>
      <List/>
    </div>
  );
}
export default Todo; 



