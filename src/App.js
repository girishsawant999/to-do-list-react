import React from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import Task from './Components/Task';
import uuid from 'react-uuid';

function App() {
  const [tasks, settasks] = React.useState(
    localStorage.getItem('tasks')
      ? JSON.parse(localStorage.getItem('tasks'))
      : []
  );

  const addTask = (task) => {
    let new_task = [
      ...tasks,
      {
        id: uuid(),
        value: capitalizeFirstLetter(task),
        status: false,
      },
    ];

    settasks(new_task);
    localStorage.setItem('tasks', JSON.stringify(new_task));
  };

  const deleteTask = (id) => {
    let new_task = tasks.filter((task) => task.id !== id);
    settasks(new_task);
    localStorage.setItem('tasks', JSON.stringify(new_task));
  };

  const changeStatus = (id) => {
    let new_task = tasks.map((task) => {
      if (task.id === id) {
        task.status = !task.status;
      }
      return task;
    });
    settasks(new_task);
    localStorage.setItem('tasks', JSON.stringify(new_task));
  };

  const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1)
  };

  return (
    <div className="App">
      <AddTask addTask={addTask} />
      <div className="app__tasks">
        {tasks.map((task) => (
          <Task
            task={task}
            deleteTask={deleteTask}
            changeStatus={changeStatus}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
