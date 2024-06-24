import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/taskSlice';

function TaskItem({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      dispatch(editTask({ id: task.id, text: newText }));
    }
    setIsEditing(!isEditing);
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TaskItem;
