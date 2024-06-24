import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <div className="App neon-form">
      <h1>To-Do Items</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
