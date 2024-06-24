import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import '../App.css';

function TaskInput() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='task-input'
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button className='task-input' type="submit">Add Task</button>
    </form>
  );
}

export default TaskInput;
