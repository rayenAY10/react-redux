// AddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './actions';

const AddTask = () => {
  const dispatch = useDispatch();
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
    if (taskDescription.trim() !== '') {
      dispatch(addTask({ id: Date.now(), description: taskDescription, isDone: false }));
      setTaskDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
