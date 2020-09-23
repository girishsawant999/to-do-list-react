import React from 'react';
import './task.css';

function Task({ task, deleteTask, changeStatus }) {
  return (
    <div className="task">
      <div className="task__status">
        <input
          type="checkbox"
          name="status"
          id={task.id}
          checked={task.status}
          onChange={() => changeStatus(task.id)}
        />
      </div>
      <label for={task.id}>
        <div className="task__value">{task.value}</div>
      </label>
      <div className="task__delete" onClick={() => deleteTask(task.id)}>
        <span class="material-icons">delete_forever</span>
      </div>
    </div>
  );
}

export default Task;
