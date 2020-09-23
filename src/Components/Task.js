import React from 'react';
import './task.css';

function Task({ task, deleteTask, changeStatus }) {
  return (
    <>
      <div className="task">
        <div
          className="task__status disable-select"
          onClick={() => changeStatus(task.id)}>
          {task.status ? (
            <span class="material-icons cursor-pointer">check_box</span>
          ) : (
            <span class="material-icons cursor-pointer">
              check_box_outline_blank
            </span>
          )}
        </div>
        <div
          className={`task__value cursor-pointer ${
            task.status ? 'text-line-through color-green' : ''
          }`}
          onClick={() => changeStatus(task.id)}>
          {task.value}
        </div>
        <div
          className="task__delete disable-select"
          onClick={() => deleteTask(task.id)}>
          <span class="material-icons">delete_forever</span>
        </div>
      </div>
      <hr className="task__hr" />
    </>
  );
}

export default Task;
