// Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask } from './actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <li>
      <input type="checkbox" checked={task.isDone} onChange={handleToggleTask} />
      <span>{task.description}</span>
    </li>
  );
};

export default Task;
