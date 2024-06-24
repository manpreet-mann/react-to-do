import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/taskSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faSave } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function TaskItem({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newText.trim()) {
      dispatch(editTask({ id: task.id, text: newText }));
    }
    setIsEditing(false);
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <li className="task-item">
      <div className="task-content">
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
            className="task-input"
          />
        ) : (
          <span className={`task-text ${task.completed ? 'completed' : ''}`}>
            {task.text}
          </span>
        )}
        <div className="task-meta">
          {new Date(task.id).toLocaleTimeString()}, {new Date(task.id).toLocaleDateString()}
        </div>
      </div>
      <div className="task-actions">
        {isEditing ? (
          <button onClick={handleSave} className="task-button">
            <FontAwesomeIcon icon={faSave} />
          </button>
        ) : (
          <button onClick={handleEdit} className="task-button">
            <FontAwesomeIcon icon={faEdit} />
          </button>
        )}
        <button onClick={handleDelete} className="task-button">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
