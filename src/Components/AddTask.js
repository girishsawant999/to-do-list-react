import React from 'react';
import './addTask.css';

function addTask({ addTask }) {
  const formSubmit = (e) => {
    e.preventDefault();
    addTask(e.target.task.value);
    e.target.task.value = '';
  };
  return (
    <div className="addTask">
      <form action="" onSubmit={formSubmit}>
        <input type="text" name="task" id="input_addTask" />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default addTask;
