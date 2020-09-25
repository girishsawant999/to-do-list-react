import React from 'react';
import './addTask.css';

function addTask({ addTask }) {
  const formSubmit = (e) => {
    e.preventDefault();
    const re = /^(?!\s*$).+/g;
    if (re.test(e.target.task.value)) {
      addTask(e.target.task.value);
      e.target.task.value = '';
    }
  };
  return (
    <div className="addTask">
      <form action="" onSubmit={formSubmit}>
        <input
          type="text"
          name="task"
          id="input_addTask"
          placeholder="Enter the task"
          autoComplete="off"
        />
        <button className="disable-select" type="submit">
          Add Task <span class="material-icons">add</span>
        </button>
      </form>
    </div>
  );
}

export default addTask;
